import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const structure = galleryItems
  .map(
    element => 
      `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
         <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
      </a>
   </li>`
  ).join('');
gallery.innerHTML = structure

console.log(structure);


const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: "alt", 
  captionDelay: 250,
})
