document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuButton = document.querySelector("[data-menu-toggle]");

if (menuButton) {
  const menuMarkup = `
    <div class="mega-menu" id="mega-menu" data-mega-menu hidden>
      <div class="mega-menu__bar">
        <a class="brand brand--inverse" href="index.html" aria-label="Jamie Wilson home">
          <span class="brand-mark" aria-hidden="true">JW</span>
          <span class="brand-copy">Jamie Wilson<br />Business control room</span>
        </a>
        <button class="menu-close" type="button" data-menu-close aria-label="Close menu">
          <span>Close</span><i aria-hidden="true"></i>
        </button>
      </div>
      <div class="mega-menu__body">
        <div class="mega-menu__intro">
          <p>Build the business.<br /><span>Keep your head.</span></p>
          <a href="start-here.html">Not sure where to begin? Start here <span aria-hidden="true">&rarr;</span></a>
        </div>
        <nav class="mega-menu__grid" aria-label="Business guide">
          <section>
            <p>01 / Direction</p>
            <a href="index.html">Home</a>
            <a class="mega-menu__final-link" href="home-final.html">Home (final)</a>
            <a href="start-here.html">Start here</a>
            <a class="mega-menu__final-link" href="start-here-final.html">Start here (final)</a>
            <a href="services.html">Services</a>
            <a class="mega-menu__final-link" href="services-final.html">Services (final)</a>
            <a href="names.html">4,351 names</a>
            <a class="mega-menu__final-link" href="names-final.html">4,351 names (final)</a>
            <a href="logos.html">Logo gallery</a>
            <a class="mega-menu__final-link" href="logos-final.html">Logo gallery (final)</a>
          </section>
          <section>
            <p>02 / Find work</p>
            <a href="pricing.html">Pricing</a>
            <a class="mega-menu__final-link" href="pricing-final.html">Pricing (final)</a>
            <a href="sales.html">Sales system</a>
            <a class="mega-menu__final-link" href="sales-final.html">Sales system (final)</a>
            <a href="advertising.html">Advertising</a>
            <a class="mega-menu__final-link" href="advertising-final.html">Advertising (final)</a>
            <a href="competitors.html">Competitors</a>
            <a class="mega-menu__final-link" href="competitors-final.html">Competitors (final)</a>
          </section>
          <section>
            <p>03 / Money</p>
            <a href="budget.html">Budget</a>
            <a class="mega-menu__final-link" href="budget-final.html">Budget (final)</a>
            <a href="accounting.html">Accounting</a>
            <a class="mega-menu__final-link" href="accounting-final.html">Accounting (final)</a>
            <a href="tax.html">Tax</a>
            <a class="mega-menu__final-link" href="tax-final.html">Tax (final)</a>
            <a href="projections.html">Projections</a>
            <a class="mega-menu__final-link" href="projections-final.html">Projections (final)</a>
          </section>
          <section>
            <p>04 / Run it</p>
            <a href="setup.html">Set up in NZ</a>
            <a class="mega-menu__final-link" href="setup-final.html">Set up in NZ (final)</a>
            <a href="operations.html">Operations</a>
            <a class="mega-menu__final-link" href="operations-final.html">Operations (final)</a>
            <a href="https://dottereldesign.github.io/portfolio/">Portfolio <span aria-hidden="true">&nearr;</span></a>
            <a href="mailto:howemanning@gmail.com?subject=Website%20project%20enquiry">Start a project <span aria-hidden="true">&nearr;</span></a>
          </section>
        </nav>
      </div>
      <div class="mega-menu__footer">
        <span>Christchurch / Aotearoa New Zealand</span>
        <span>Honest plans. Real numbers. No guru theatre.</span>
      </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", menuMarkup);

  const menu = document.querySelector("[data-mega-menu]");
  const closeButton = menu.querySelector("[data-menu-close]");
  const menuLinks = menu.querySelectorAll("a");
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  let returnFocus = menuButton;

  menu.querySelectorAll("a[href$='.html']").forEach((link) => {
    if (link.getAttribute("href") === currentFile) link.setAttribute("aria-current", "page");
  });

  const openMenu = () => {
    returnFocus = document.activeElement;
    menu.hidden = false;
    document.body.classList.add("menu-open");
    menuButton.setAttribute("aria-expanded", "true");
    closeButton.focus();
  };

  const closeMenu = () => {
    menu.hidden = true;
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
  };

  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (menu.hidden) return;
    if (event.key === "Escape") closeMenu();
    if (event.key !== "Tab") return;

    const focusable = [closeButton, ...menuLinks];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const budgetCalculator = document.querySelector("[data-budget-calculator]");

if (budgetCalculator) {
  const incomeInput = budgetCalculator.querySelector("[data-income-input]");
  const incomeOutput = budgetCalculator.querySelector("[data-income-output]");
  const hnryOutput = budgetCalculator.querySelector("[data-hnry-output]");
  const totalOutput = budgetCalculator.querySelector("[data-total-output]");
  const monthlyOutput = budgetCalculator.querySelector("[data-monthly-output]");
  const fixedAnnualBudget = 4786;
  const currency = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    maximumFractionDigits: 0,
  });

  const updateBudget = () => {
    const income = Number(incomeInput.value);
    const hnryFee = Math.min(income * 0.01, 1500);
    const annualTotal = fixedAnnualBudget + hnryFee;

    incomeOutput.textContent = currency.format(income);
    hnryOutput.textContent = currency.format(hnryFee);
    totalOutput.textContent = currency.format(annualTotal);
    monthlyOutput.textContent = currency.format(annualTotal / 12);
  };

  incomeInput.addEventListener("input", updateBudget);
  updateBudget();
}
