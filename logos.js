const croppedLogoSheets = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 18, 19, 20, 21, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43,
];

const intactLogoBoards = [17, 22, 23];
const logoGallery = document.querySelector("[data-logo-gallery]");
const logoCount = document.querySelector("[data-logo-count]");

if (logoGallery) {
  const items = [
    ...croppedLogoSheets.flatMap((sheet) =>
      Array.from({ length: 9 }, (_, index) => {
        const row = Math.floor(index / 3) + 1;
        const column = (index % 3) + 1;
        return {
          src: `assets/logos/logo-${String(sheet).padStart(2, "0")}-${row}${column}.webp`,
          alt: `JW logo concept from sheet ${sheet}, option ${index + 1}`,
          label: `Sheet ${String(sheet).padStart(2, "0")} / ${String(index + 1).padStart(2, "0")}`,
        };
      })
    ),
    ...intactLogoBoards.map((board) => ({
      src: `assets/logos/board-${String(board).padStart(2, "0")}.webp`,
      alt: `Complete logo presentation board ${board}`,
      label: `Board ${String(board).padStart(2, "0")} / Full sheet`,
      board: true,
    })),
  ];

  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const figure = document.createElement("figure");
    const link = document.createElement("a");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");

    figure.className = `logo-gallery__item${item.board ? " logo-gallery__item--board" : ""}`;
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

  logoGallery.append(fragment);
  logoCount.textContent = `${items.length} images / 360 individual marks + 3 intact boards`;
}
