import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const createGallery = (element) => {
  return element
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");
};

const photosMarkUp = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosMarkUp);
//console.log(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
lightbox.on("show.simplelightbox");
