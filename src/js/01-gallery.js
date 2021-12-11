// Add imports above this line
import { galleryItems } from './gallery-items';
import _default from '../../node_modules/simplelightbox/dist/simple-lightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function galleryAllImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href=${original}>
                         <img class="gallery__image"
                          src=${preview}
                          data-source=${original}
                          alt=${description} />
                    </a>`;
    })
    .join('');
}

function galeryGrid() {
  gallery.innerHTML = galleryAllImages(galleryItems);
  new SimpleLightbox('.gallery a', {
    CaptionPosition: 'outside',
    captionsData: 'alt',
    captionDelay: 250,
  });
}

galeryGrid();