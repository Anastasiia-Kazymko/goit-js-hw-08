// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

//console.log(galleryItems);
const paletteContainer = document.querySelector('.gallery');
const cardMarkup = createGalleryItemsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('afterbegin', cardMarkup);

function createGalleryItemsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
    }).join('');    
    
};

paletteContainer.addEventListener('click', onImgClick);

function onImgClick(evt) {   
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    evt.preventDefault();

    let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 });
    console.log(gallery);
}

