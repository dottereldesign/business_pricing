const croppedLogoSheets = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 18, 19, 20, 21, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43,
  44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  60, 61, 62, 63, 64, 65, 66, 67,
];

const intactLogoBoards = [17, 22, 23, 56, 57, 58, 59];
const newFavouriteLogos = [60, 61, 62, 63, 64, 65, 66, 67].flatMap((sheet) =>
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

const makeLogoItem = (sheet, option) => {
  const row = Math.floor((option - 1) / 3) + 1;
  const column = ((option - 1) % 3) + 1;

  return {
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
    link.href = item.src;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.setAttribute("aria-label", `Open ${item.label}`);
    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = item.board ? 1536 : 418;
    image.height = item.board ? 1024 : 418;
    caption.textContent = item.label;

    link.append(image);
    figure.append(link, caption);
    fragment.append(figure);
  });

  container.append(fragment);
};

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
      src: `assets/logos/board-${String(board).padStart(2, "0")}.webp`,
      alt: `Complete logo presentation board ${board}`,
      label: `Board ${String(board).padStart(2, "0")} / Full sheet`,
      board: true,
    })),
  ];

  renderLogoItems(logoGallery, items);
  logoCount.textContent = `${items.length} images / 540 individual marks + 7 intact boards`;
}
