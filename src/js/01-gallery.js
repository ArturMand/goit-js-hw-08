
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const getGalleryRef = document.querySelector('.gallery');
const listGalleryMarkup = galleryItems
  .map(
    ({ preview, description, original }) =>
      /*html*/ ` <a class='gallery__item' href='${original}' ><img class='gallery__image' src='${preview}' alt='${description}' title="${description}"> </a> `
  )
  .join('');

getGalleryRef.innerHTML = listGalleryMarkup;

new SimpleLightbox('.gallery a ', {
  captionDelay: 250,
});
