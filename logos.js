const croppedLogoSheets = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 18, 19, 20, 21, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43,
  44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  60, 61, 62, 63, 64, 65, 66, 67,
  68, 69, 70, 71,
  72, 73, 74, 75,
  76, 77, 78, 79,
  80, 81, 82, 83,
];

const intactLogoBoards = [17, 22, 23, 56, 57, 58, 59];
const newFavouriteLogos = [80, 81, 82, 83, 76, 77, 78, 79, 72, 73, 74, 75, 68, 69, 70, 71, 60, 61, 62, 63, 64, 65, 66, 67].flatMap((sheet) =>
  Array.from({ length: 9 }, (_, index) => [sheet, index + 1])
);
const favouriteLogos = [
  [7, 2],
  [13, 2],
  [12, 9],
  [16, 6],
  [30, 5],
  [32, 6],
  [34, 2],
  [37, 5],
  [34, 9],
  [34, 6],
  [37, 9],
  [39, 3],
  [39, 7],
  [42, 1],
  [44, 1],
  [44, 3],
];

const logoGallery = document.querySelector("[data-logo-gallery]");
const logoFavourites = document.querySelector("[data-logo-favourites]");
const logoCount = document.querySelector("[data-logo-count]");
const selectionList = document.querySelector("[data-selection-list]");
const selectionCount = document.querySelector("[data-selection-count]");
const selectionStatus = document.querySelector("[data-selection-status]");
const selectionKey = "business-pricing-logo-selection-v1";
const selectedLogoIds = new Set(
  JSON.parse(localStorage.getItem(selectionKey) || "[]")
);

const makeLogoItem = (sheet, option) => {
  const row = Math.floor((option - 1) / 3) + 1;
  const column = ((option - 1) % 3) + 1;

  return {
    id: `logo-${String(sheet).padStart(2, "0")}-${String(option).padStart(2, "0")}`,
    src: `assets/logos/logo-${String(sheet).padStart(2, "0")}-${row}${column}.webp`,
    alt: `BC logo concept from sheet ${sheet}, option ${option}`,
    label: `Sheet ${String(sheet).padStart(2, "0")} / ${String(option).padStart(2, "0")}`,
  };
};

const renderLogoItems = (container, items, favourite = false) => {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const figure = document.createElement("figure");
    const link = document.createElement("a");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");

    figure.className = `logo-gallery__item${item.board ? " logo-gallery__item--board" : ""}${favourite ? " logo-gallery__item--favourite" : ""}`;
    figure.dataset.logoId = item.id;
    figure.dataset.logoLabel = item.label;
    link.href = item.src;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.setAttribute("aria-label", `Open ${item.label}`);
    link.dataset.logoSelect = "true";
    link.setAttribute("aria-pressed", selectedLogoIds.has(item.id));
    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = item.board ? 1536 : 418;
    image.height = item.board ? 1024 : 418;
    caption.append(document.createTextNode(item.label));
    const openLink = document.createElement("a");
    openLink.className = "logo-gallery__open";
    openLink.href = item.src;
    openLink.target = "_blank";
    openLink.rel = "noreferrer";
    openLink.textContent = "Open";
    openLink.setAttribute("aria-label", `Open full-size ${item.label}`);
    caption.append(openLink);

    link.append(image);
    figure.append(link, caption);
    fragment.append(figure);
  });

  container.append(fragment);
};

const saveSelection = () => {
  localStorage.setItem(selectionKey, JSON.stringify([...selectedLogoIds]));
};

const updateSelectionUI = () => {
  document.querySelectorAll("[data-logo-id]").forEach((figure) => {
    const selected = selectedLogoIds.has(figure.dataset.logoId);
    figure.classList.toggle("is-selected", selected);
    const trigger = figure.querySelector("[data-logo-select]");
    if (trigger) trigger.setAttribute("aria-pressed", String(selected));
  });

  if (selectionCount) selectionCount.textContent = selectedLogoIds.size;
  if (!selectionList) return;
  selectionList.replaceChildren();
  if (!selectedLogoIds.size) {
    const empty = document.createElement("li");
    empty.className = "logo-selection__empty";
    empty.textContent = "Nothing selected yet.";
    selectionList.append(empty);
    return;
  }
  selectedLogoIds.forEach((id) => {
    const figure = document.querySelector(`[data-logo-id="${id}"]`);
    const item = document.createElement("li");
    item.textContent = figure?.dataset.logoLabel || id;
    selectionList.append(item);
  });
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-logo-select]");
  if (trigger) {
    event.preventDefault();
    const id = trigger.closest("[data-logo-id]")?.dataset.logoId;
    if (!id) return;
    if (selectedLogoIds.has(id)) selectedLogoIds.delete(id);
    else selectedLogoIds.add(id);
    saveSelection();
    updateSelectionUI();
    return;
  }

  if (event.target.closest("[data-clear-selection]")) {
    selectedLogoIds.clear();
    saveSelection();
    updateSelectionUI();
    if (selectionStatus) selectionStatus.textContent = "Selection cleared.";
    return;
  }

  if (event.target.closest("[data-copy-selection]")) {
    const list = [...selectedLogoIds].map((id) => {
      const figure = document.querySelector(`[data-logo-id="${id}"]`);
      return figure?.dataset.logoLabel || id;
    });
    const text = list.length ? list.join("\n") : "No logos selected.";
    navigator.clipboard.writeText(text).then(() => {
      if (selectionStatus) selectionStatus.textContent = `${list.length} logo IDs copied.`;
    });
  }
});

if (logoFavourites) {
  renderLogoItems(
    logoFavourites,
    [...newFavouriteLogos, ...favouriteLogos].map(([sheet, option]) =>
      makeLogoItem(sheet, option)
    ),
    true
  );
}

if (logoGallery) {
  const items = [
    ...croppedLogoSheets.flatMap((sheet) =>
      Array.from({ length: 9 }, (_, index) => makeLogoItem(sheet, index + 1))
    ),
    ...intactLogoBoards.map((board) => ({
      id: `board-${String(board).padStart(2, "0")}`,
      src: `assets/logos/board-${String(board).padStart(2, "0")}.webp`,
      alt: `Complete logo presentation board ${board}`,
      label: `Board ${String(board).padStart(2, "0")} / Full sheet`,
      board: true,
    })),
  ];

  renderLogoItems(logoGallery, items);
  logoCount.textContent = `${items.length} images / 720 individual marks + 7 intact boards`;
}

updateSelectionUI();
