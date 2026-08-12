const nzd = new Intl.NumberFormat("en-NZ", {
  style: "currency",
  currency: "NZD",
  maximumFractionDigits: 0,
});

const decimal = new Intl.NumberFormat("en-NZ", {
  maximumFractionDigits: 1,
});

const estimateIndividualTax = (income) => {
  const taxableIncome = Math.max(0, Number(income) || 0);
  const bands = [
    { from: 0, to: 15600, rate: 0.105 },
    { from: 15600, to: 53500, rate: 0.175 },
    { from: 53500, to: 78100, rate: 0.3 },
    { from: 78100, to: 180000, rate: 0.33 },
    { from: 180000, to: Infinity, rate: 0.39 },
  ];

  return bands.reduce((total, band) => {
    const dollarsInBand = Math.max(0, Math.min(taxableIncome, band.to) - band.from);
    return total + dollarsInBand * band.rate;
  }, 0);
};

const marginalRate = (income) => {
  if (income <= 0) return 0;
  if (income <= 15600) return 10.5;
  if (income <= 53500) return 17.5;
  if (income <= 78100) return 30;
  if (income <= 180000) return 33;
  return 39;
};

const taxCalculator = document.querySelector("[data-tax-calculator]");

if (taxCalculator) {
  const incomeInput = taxCalculator.querySelector("[data-tax-income]");
  const paidInput = taxCalculator.querySelector("[data-tax-paid]");
  const totalOutput = taxCalculator.querySelector("[data-tax-total]");
  const effectiveOutput = taxCalculator.querySelector("[data-tax-effective]");
  const marginalOutput = taxCalculator.querySelector("[data-tax-marginal]");
  const afterOutput = taxCalculator.querySelector("[data-tax-after]");
  const reserveOutput = taxCalculator.querySelector("[data-tax-reserve]");
  const monthlyOutput = taxCalculator.querySelector("[data-tax-monthly]");
  const warningOutput = taxCalculator.querySelector("[data-tax-warning]");

  const updateTax = () => {
    const income = Math.max(0, Number(incomeInput.value) || 0);
    const paid = Math.max(0, Number(paidInput.value) || 0);
    const tax = estimateIndividualTax(income);
    const reserve = Math.max(0, tax - paid);
    const effective = income ? (tax / income) * 100 : 0;

    totalOutput.textContent = nzd.format(tax);
    effectiveOutput.textContent = `${effective.toFixed(1)}%`;
    marginalOutput.textContent = `${marginalRate(income)}%`;
    afterOutput.textContent = nzd.format(Math.max(0, income - tax));
    reserveOutput.textContent = nzd.format(reserve);
    monthlyOutput.textContent = nzd.format(reserve / 12);

    const messages = [];
    if (income >= 60000) messages.push("Check the separate NZ$60,000 GST turnover test—profit and turnover are not the same figure.");
    else messages.push("The GST threshold uses taxable turnover, not the profit entered here.");
    if (reserve > 5000) messages.push("Residual income tax above NZ$5,000 can trigger provisional tax for the following year.");
    messages.push("ACC and personal adjustments remain outside this estimate.");
    warningOutput.textContent = messages.join(" ");
  };

  [incomeInput, paidInput].forEach((input) => input.addEventListener("input", updateTax));
  updateTax();
}

const projectionCalculator = document.querySelector("[data-projection-calculator]");

if (projectionCalculator) {
  const get = (selector) => projectionCalculator.querySelector(selector);
  const inputs = {
    leads: get("[data-projection-leads]"),
    growth: get("[data-projection-growth]"),
    close: get("[data-projection-close]"),
    value: get("[data-projection-value]"),
    careStart: get("[data-projection-care-start]"),
    careAdds: get("[data-projection-care-adds]"),
    careFee: get("[data-projection-care-fee]"),
    overhead: get("[data-projection-overhead]"),
    variable: get("[data-projection-variable]"),
  };
  const chart = get("[data-projection-chart]");
  const note = get("[data-projection-note]");

  const updateProjection = () => {
    const startingLeads = Math.max(0, Number(inputs.leads.value) || 0);
    const growthRate = Math.max(-0.5, (Number(inputs.growth.value) || 0) / 100);
    const closeRate = Math.min(1, Math.max(0, (Number(inputs.close.value) || 0) / 100));
    const projectValue = Math.max(0, Number(inputs.value.value) || 0);
    const startingCare = Math.max(0, Number(inputs.careStart.value) || 0);
    const careAdds = Math.max(0, Number(inputs.careAdds.value) || 0);
    const careFee = Math.max(0, Number(inputs.careFee.value) || 0);
    const overhead = Math.max(0, Number(inputs.overhead.value) || 0);
    const variableRate = Math.min(1, Math.max(0, (Number(inputs.variable.value) || 0) / 100));
    const months = [];
    let projectCount = 0;
    let careRevenue = 0;

    for (let month = 0; month < 12; month += 1) {
      const leads = startingLeads * Math.pow(1 + growthRate, month);
      const projects = leads * closeRate;
      const activeCareClients = startingCare + careAdds * month;
      const monthlyCareRevenue = activeCareClients * careFee;
      const revenue = projects * projectValue + monthlyCareRevenue;
      projectCount += projects;
      careRevenue += monthlyCareRevenue;
      months.push(revenue);
    }

    const revenue = months.reduce((sum, month) => sum + month, 0);
    const profit = revenue - revenue * variableRate - overhead;
    const tax = estimateIndividualTax(Math.max(0, profit));
    const afterTax = profit - tax;

    get("[data-projection-revenue]").textContent = nzd.format(revenue);
    get("[data-projection-projects]").textContent = decimal.format(projectCount);
    get("[data-projection-care]").textContent = nzd.format(careRevenue);
    get("[data-projection-profit]").textContent = nzd.format(profit);
    get("[data-projection-tax]").textContent = nzd.format(tax);
    get("[data-projection-after]").textContent = nzd.format(afterTax);

    const maxMonth = Math.max(...months, 1);
    chart.replaceChildren();
    months.forEach((monthRevenue, index) => {
      const bar = document.createElement("div");
      const value = document.createElement("span");
      bar.className = "projection-bar";
      bar.style.height = `${Math.max(8, (monthRevenue / maxMonth) * 100)}%`;
      bar.setAttribute("aria-label", `Month ${index + 1}: ${nzd.format(monthRevenue)} projected revenue`);
      value.textContent = nzd.format(monthRevenue);
      bar.append(value);
      chart.append(bar);
    });

    const warnings = ["After-tax estimate excludes ACC, GST, student loan, KiwiSaver, credits and personal adjustments."];
    if (projectCount > 24) warnings.push("This forecast exceeds two expected projects per month; check solo delivery capacity.");
    if (profit < 0) warnings.push("The assumptions currently produce a loss before personal tax.");
    note.textContent = warnings.join(" ");
  };

  Object.values(inputs).forEach((input) => input.addEventListener("input", updateProjection));
  updateProjection();
}

const adCalculator = document.querySelector("[data-ad-calculator]");

if (adCalculator) {
  const get = (selector) => adCalculator.querySelector(selector);
  const inputs = {
    spend: get("[data-ad-spend]"),
    cpl: get("[data-ad-cpl]"),
    close: get("[data-ad-close]"),
    value: get("[data-ad-value]"),
    margin: get("[data-ad-margin]"),
  };

  const updateAds = () => {
    const spend = Math.max(0, Number(inputs.spend.value) || 0);
    const costPerLead = Math.max(0.01, Number(inputs.cpl.value) || 0.01);
    const closeRate = Math.min(1, Math.max(0, (Number(inputs.close.value) || 0) / 100));
    const projectValue = Math.max(0, Number(inputs.value.value) || 0);
    const grossMargin = Math.min(1, Math.max(0, (Number(inputs.margin.value) || 0) / 100));
    const leads = spend / costPerLead;
    const projects = leads * closeRate;
    const revenue = projects * projectValue;
    const contribution = revenue * grossMargin - spend;
    const breakEvenCpl = projectValue * grossMargin * closeRate;
    const roas = spend ? revenue / spend : 0;

    get("[data-ad-leads]").textContent = decimal.format(leads);
    get("[data-ad-projects]").textContent = decimal.format(projects);
    get("[data-ad-revenue]").textContent = nzd.format(revenue);
    get("[data-ad-roas]").textContent = `${roas.toFixed(1)}×`;
    get("[data-ad-contribution]").textContent = nzd.format(contribution);
    get("[data-ad-breakeven]").textContent = nzd.format(breakEvenCpl);
  };

  Object.values(inputs).forEach((input) => input.addEventListener("input", updateAds));
  updateAds();
}
