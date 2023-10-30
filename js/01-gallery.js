import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const createGallery = (element) => {
  return element
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
};

const photosMarkUp = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosMarkUp);
// console.log(galleryItems);

//-------------------
const handleGalleryClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const urlOriginal = event.target.dataset.source;
  // New Basiclight box instance
  const instance = basicLightbox.create(`<img src="${urlOriginal}"> 	
`);
  instance.show();

  // handleOnEscKeyPress
  const handleOnEscKeyPress = (event) => {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", handleOnEscKeyPress);
    }
  };
  window.addEventListener("keydown", handleOnEscKeyPress);
};

galleryList.addEventListener("click", handleGalleryClick);
