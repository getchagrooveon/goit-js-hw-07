import {galleryItems} from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');
const structure = galleryItems
  .map(
    element => 
      `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
        <img
          class="gallery__image"
          src="${element.preview}"
          data-source="${element.original}"
          alt="${element.description}"/>
      </a>
    </li>`
  ).join('\r\n');

gallery.innerHTML = structure

gallery.addEventListener("click", (event)=>{
    event.preventDefault()
const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {onShow: (instance)=> window.addEventListener("keydown", (event)=> {
if (event.key === "Escape") {
    instance.close()
}
}
)})
instance.show()
})



