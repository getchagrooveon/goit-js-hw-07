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
  ).join('\r\n');
gallery.innerHTML = structure

console.log(galleryItems);

gallery.addEventListener("click", (event)=>{
    event.preventDefault()
const lightbox = new SimpleLightbox('.gallery__link', {
  captions: true, 
  captionSelector: 'img',
  captionType: "attr", 
  captionsData: "alt",
  captionPosition: 'bottom', 
  captionDelay: 250,
  docClose: true,
})
})
