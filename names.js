const combineName = (...parts) => parts.filter(Boolean).join(" ");

// A deliberately smaller catalogue: coined or less-generic pairings have a
// better chance of clearing a domain/handle check than common single words.
// Availability still changes constantly and must be confirmed before use.
const nameDirections = [
  {
    id: "distinctive",
    label: "Distinctive studio names",
    collection: "distinctive",
    starts: [
      "Northbeam", "Fieldnote", "Kindred Pixel", "Plain Signal", "Open Frame",
      "Cedar Circuit", "Bright Ledger", "Small Orbit", "Honest Module", "Good Current",
    ],
    ends: ["Studio", "Works", "Web", "Digital", "Design", "Office", "House", "Workshop", "Foundry", "Collective"],
  },
  {
    id: "growth",
    label: "Warm growth names",
    collection: "growth",
    starts: [
      "Grow Kindly", "Business Bloom", "Client Spring", "Local Lift", "Trade Upward",
      "Build Brighter", "Good Business", "Work Forward", "Small & Mighty", "Ready to Grow",
    ],
    ends: ["Studio", "Works", "Web", "Digital", "Design", "Online", "Websites", "Creative", "Partner", "Company"],
  },
  {
    id: "nature",
    label: "Warm New Zealand nature",
    collection: "nature",
    starts: [
      "Amber Tussock", "Copper Dotterel", "Silver Fantail", "Golden Bellbird", "Little Albatross",
      "Soft Harbour", "Open Estuary", "Bright Shearwater", "Kind Kingfisher", "Calm Petrel",
    ],
    ends: ["Studio", "Works", "Web", "Digital", "Design", "Office", "House", "Workshop", "Creative", "Collective"],
  },
];

const coreBusinessNames = nameDirections.flatMap((direction) =>
  direction.starts.flatMap((start) =>
    direction.ends.map((end) => ({
      name: combineName(start, end),
      category: direction.id,
      categoryLabel: direction.label,
      collection: direction.collection,
    }))
  )
);

const nzInspirationDirection = {
  id: "nz-inspiration",
  label: "NZ inspiration builds",
  collection: "nz-inspiration",
};

const nzInspirationRoots = [
  "Yellow-eyed Penguin", "Black Robin", "Wrybill", "Rock Wren", "Greywacke",
  "Braided River", "Port Hills", "Ridgeline", "Windbreak", "Headland",
];

const clearBusinessEnds = [
  "Studio", "Digital", "Web", "Works", "Design",
  "Creative", "Collective", "House", "Lab", "Company",
];

const nzInspirationBusinessNames = nzInspirationRoots.flatMap((start) =>
  clearBusinessEnds.map((end) => ({
    name: combineName(start, end),
    category: nzInspirationDirection.id,
    categoryLabel: nzInspirationDirection.label,
    collection: nzInspirationDirection.collection,
  }))
);

const favouritesDirection = {
  id: "favourites-built-out",
  label: "Built from your favourites",
  collection: "favourites-built-out",
};

const favouriteLeadWords = [
  "Tussock", "Dotterel", "Handshake", "Honest", "Module",
  "Jamie", "JW", "Wilson", "Kingfisher", "Kindred",
];

const favouriteMiddleWords = [
  "Pixel", "Kindly", "Upward", "North", "Bright",
  "Open", "Clear", "Good", "Field", "Found",
];

const favouriteBusinessNames = favouriteLeadWords.flatMap((lead) =>
  favouriteMiddleWords.flatMap((middle) =>
    clearBusinessEnds.map((end) => ({
      name: `${lead} & ${middle} ${end}`,
      category: favouritesDirection.id,
      categoryLabel: favouritesDirection.label,
      collection: favouritesDirection.collection,
    }))
  )
);

const hybridDirection = {
  id: "nz-favourites-hybrid",
  label: "NZ + favourites combined",
  collection: "nz-favourites-hybrid",
};

const hybridNzWords = [
  "Greywacke", "Wrybill", "Shingle", "Scree", "Ridgeline",
  "Windbreak", "Harbour", "Headland", "Foothills", "Black Robin",
];

const hybridFavouriteWords = [
  "Honest", "Kindred", "Upward", "Pixel", "Module",
  "Handshake", "Wilson", "JW", "Kindly", "Jamie",
];

const hybridBusinessNames = hybridNzWords.flatMap((nzWord) =>
  hybridFavouriteWords.flatMap((favouriteWord) =>
    clearBusinessEnds.map((end) => ({
      name: combineName(nzWord, favouriteWord, end),
      category: hybridDirection.id,
      categoryLabel: hybridDirection.label,
      collection: hybridDirection.collection,
    }))
  )
);

const coolTechDirection = {
  id: "cool-tech",
  label: "Cool tech vocabulary",
  collection: "cool-tech",
};

const coolTechLeadWords = [
  "Kernel", "Cipher", "Vector", "Lambda", "Uplink",
  "Runtime", "Protocol", "Packet", "Signal", "Quine",
];

const coolTechMiddleWords = [
  "North", "Wild", "Neon", "Quiet", "Lunar",
  "Electric", "Open", "Bright", "Atomic", "Velvet",
];

const coolTechBusinessNames = coolTechLeadWords.flatMap((lead) =>
  coolTechMiddleWords.flatMap((middle) =>
    clearBusinessEnds.map((end) => ({
      name: combineName(middle, lead, end),
      category: coolTechDirection.id,
      categoryLabel: coolTechDirection.label,
      collection: coolTechDirection.collection,
    }))
  )
);

const coolTechReplacementNames = [
  "Afterglow Kernel Studio", "Midnight Cipher Digital", "Prism Vector Web", "Orbit Lambda Works",
  "Solstice Uplink Design", "Ultraviolet Runtime Creative", "Silver Protocol Collective", "Copper Packet House",
  "Lucid Signal Lab", "Afterglow Packet Company", "Afterglow Cipher Web", "Midnight Vector Digital",
  "Prism Lambda Studio", "Orbit Uplink Creative", "Solstice Runtime Works", "Ultraviolet Protocol Design",
  "Silver Packet Lab", "Copper Kernel Collective", "Lucid Quine House", "Midnight Kernel Company",
  "Afterglow Vector Studio", "Midnight Signal Web",
].map((name) => ({
  name,
  category: coolTechDirection.id,
  categoryLabel: coolTechDirection.label,
  collection: coolTechDirection.collection,
}));

coolTechBusinessNames.push(...coolTechReplacementNames);

const funnyTechDirection = {
  id: "funny-tech",
  label: "Hilarious tech folklore",
  collection: "funny-tech",
};

const funnyTechLeadWords = [
  "Interweb", "Rubber Duck", "Yak Shave", "Bike Shed", "Foo Bar",
  "Cache Cow", "Heisenbug", "Xyzzy", "Null Pointer", "Works on Mine",
];

const funnyTechMiddleWords = [
  "Deluxe", "Department", "Emergency", "Society", "Circus",
  "Hotline", "Kitchen", "Shed", "Factory", "Orchestra",
];

const funnyTechBusinessNames = funnyTechLeadWords.flatMap((lead) =>
  funnyTechMiddleWords.flatMap((middle) =>
    clearBusinessEnds.map((end) => ({
      name: combineName(lead, middle, end),
      category: funnyTechDirection.id,
      categoryLabel: funnyTechDirection.label,
      collection: funnyTechDirection.collection,
    }))
  )
);

const allDirections = [
  ...nameDirections,
  nzInspirationDirection,
  favouritesDirection,
  hybridDirection,
  coolTechDirection,
  funnyTechDirection,
];

const generatedBusinessNames = [
  ...coreBusinessNames,
  ...nzInspirationBusinessNames,
  ...favouriteBusinessNames,
  ...hybridBusinessNames,
  ...coolTechBusinessNames,
  ...funnyTechBusinessNames,
];

const domainForName = (name) => `${name.toLocaleLowerCase("en-NZ").replaceAll("&", "and").replace(/[^a-z0-9]/g, "")}.com`;

// Live Verisign RDAP screen performed 12 August 2026. These exact .com names
// already had registry records and are intentionally excluded from the table.
const registeredDotComDomains = new Set([
  "brightsignaldigital.com",
  "brightsignalstudio.com",
  "brightvectorhouse.com",
  "brightvectorlab.com",
  "brightvectorworks.com",
  "blackrobindigital.com",
  "braidedrivercollective.com",
  "brightledgerworks.com",
  "fieldnotedesign.com",
  "fieldnotedigital.com",
  "fieldnoteoffice.com",
  "fieldnotestudio.com",
  "fieldnoteworks.com",
  "goodbusinessdesign.com",
  "goodbusinessweb.com",
  "goodbusinessworks.com",
  "headlandcollective.com",
  "headlandcompany.com",
  "headlandcreative.com",
  "headlanddesign.com",
  "headlanddigital.com",
  "headlandhouse.com",
  "headlandstudio.com",
  "localliftcompany.com",
  "localliftcreative.com",
  "localliftdesign.com",
  "localliftdigital.com",
  "localliftstudio.com",
  "localliftweb.com",
  "northbeamdesign.com",
  "northbeamdigital.com",
  "northbeamoffice.com",
  "northbeamstudio.com",
  "northbeamweb.com",
  "northbeamworks.com",
  "northsignalcollective.com",
  "northsignaldigital.com",
  "northsignalstudio.com",
  "northsignalworks.com",
  "northvectorstudio.com",
  "openframecollective.com",
  "openframedesign.com",
  "openframedigital.com",
  "openframehouse.com",
  "openframestudio.com",
  "openframeworks.com",
  "openprotocollab.com",
  "opensignaldigital.com",
  "opensignallab.com",
  "opensignalstudio.com",
  "openvectordigital.com",
  "openvectorstudio.com",
  "quietsignalcreative.com",
  "quietsignallab.com",
  "quietsignalstudio.com",
  "ridgelinecollective.com",
  "ridgelinecompany.com",
  "ridgelinecreative.com",
  "ridgelinedesign.com",
  "ridgelinedigital.com",
  "ridgelinelab.com",
  "ridgelinestudio.com",
  "ridgelineweb.com",
  "ridgelineworks.com",
  "smallandmightycreative.com",
  "smallandmightydesign.com",
  "velvetsignalstudio.com",
  "wildsignalstudio.com",
  "wildsignalworks.com",
  "windbreakdesign.com",
  "windbreakhouse.com",
]);

const allBusinessNames = generatedBusinessNames.filter((item) => !registeredDotComDomains.has(domainForName(item.name)));

const jwTussockNames = [
  "JW & Tussock",
  "JW & Tussock Studio",
  "JW & Tussock Digital",
  "JW & Tussock Web",
  "JW & Tussock Works",
  "JW & Tussock Design",
  "JW & Tussock Creative",
  "JW & Tussock Collective",
  "JW & Tussock House",
  "JW & Tussock Lab",
  "JW & Tussock Company",
  "JW Pixel & Tussock",
  "JW Module & Tussock",
  "JW Kindly & Tussock",
  "JW Upward & Tussock",
  "JW Honest & Tussock",
  "JW Digital & Tussock",
  "Jamie Wilson & Tussock",
  "Wilson, JW & Tussock",
  "Studio JW & Tussock",
];

const namesGrid = document.querySelector("[data-name-grid]");

if (namesGrid) {
  const searchInput = document.querySelector("[data-name-search]");
  const categorySelect = document.querySelector("[data-name-category]");
  const randomButton = document.querySelector("[data-name-random]");
  const countOutput = document.querySelector("[data-name-count]");
  const statusOutput = document.querySelector("[data-name-status]");
  const columnCount = 4;
  let filteredNames = allBusinessNames;

  allDirections.forEach((direction) => {
    const option = document.createElement("option");
    option.value = direction.id;
    const directionCount = allBusinessNames.filter((item) => item.category === direction.id).length;
    option.textContent = `${direction.label} (${directionCount.toLocaleString("en-NZ")})`;
    categorySelect.append(option);
  });

  const copyName = async (name) => {
    try {
      await navigator.clipboard.writeText(name);
      statusOutput.textContent = `Copied: ${name}`;
    } catch {
      statusOutput.textContent = `Selected: ${name}`;
    }
  };

  document.querySelectorAll("[data-favourite-name]").forEach((button) => {
    button.addEventListener("click", () => copyName(button.textContent.trim()));
  });

  const jwGrid = document.querySelector("[data-jw-grid]");
  const jwCount = document.querySelector("[data-jw-count]");
  const jwBusinessNames = [
    ...jwTussockNames.map((name) => ({ name })),
    ...allBusinessNames.filter((item) => /(^|\s|&)JW($|\s|&)/.test(item.name)),
  ].filter((item, index, items) => items.findIndex((candidate) => candidate.name === item.name) === index);

  if (jwGrid) {
    const fragment = document.createDocumentFragment();

    jwBusinessNames.forEach((item) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const domainCell = document.createElement("td");
      const nameButton = document.createElement("button");
      const domainButton = document.createElement("button");
      const domain = domainForName(item.name);

      nameButton.type = "button";
      nameButton.textContent = item.name;
      nameButton.setAttribute("aria-label", `Copy business name ${item.name}`);
      nameButton.addEventListener("click", () => copyName(item.name));

      domainButton.type = "button";
      domainButton.textContent = domain;
      domainButton.setAttribute("aria-label", `Copy web address ${domain}`);
      domainButton.addEventListener("click", () => copyName(domain));

      nameCell.append(nameButton);
      domainCell.append(domainButton);
      row.append(nameCell, domainCell);
      fragment.append(row);
    });

    jwGrid.append(fragment);
    jwCount.textContent = `${jwBusinessNames.length.toLocaleString("en-NZ")} JW directions`;
  }

  const renderNames = () => {
    namesGrid.replaceChildren();
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < filteredNames.length; index += columnCount) {
      const row = document.createElement("tr");

      for (let column = 0; column < columnCount; column += 1) {
        const item = filteredNames[index + column];
        const cell = document.createElement("td");

        if (item) {
          const button = document.createElement("button");
          button.type = "button";
          button.textContent = item.name;
          button.setAttribute("aria-label", `Copy ${item.name}`);
          button.addEventListener("click", () => copyName(item.name));
          cell.append(button);
        } else {
          cell.setAttribute("aria-hidden", "true");
        }

        row.append(cell);
      }

      fragment.append(row);
    }

    namesGrid.append(fragment);
    countOutput.textContent = `Showing ${filteredNames.length.toLocaleString("en-NZ")} matching names / 4,351 total`;
  };

  const filterNames = () => {
    const query = searchInput.value.trim().toLocaleLowerCase("en-NZ");
    const category = categorySelect.value;
    filteredNames = allBusinessNames.filter((item) => {
      const matchesQuery = !query || item.name.toLocaleLowerCase("en-NZ").includes(query);
      const matchesCategory = category === "all" || item.category === category;
      return matchesQuery && matchesCategory;
    });
    renderNames();
  };

  searchInput.addEventListener("input", filterNames);
  categorySelect.addEventListener("change", filterNames);
  randomButton.addEventListener("click", () => {
    const pool = filteredNames.length ? filteredNames : allBusinessNames;
    const item = pool[Math.floor(Math.random() * pool.length)];
    copyName(item.name);
  });

  const uniqueCount = new Set(allBusinessNames.map((item) => item.name)).size;
  if (allBusinessNames.length !== 4351 || uniqueCount !== 4351) {
    statusOutput.textContent = `Name bank error: expected 4,351 unique names, found ${uniqueCount}.`;
  }

  renderNames();
}
