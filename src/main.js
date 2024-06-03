import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import pixabayApi from './js/pixabay-api.js';
import render from './js/render-function.js';

const SEARCH_TEXT_ERR = `Search text cant be empty!`;
const NO_IMAGES_ERR = `Sorry, there are no images matching your search
query. Please try again!`;
const searchForm = document.querySelector('.searchForm');
const container = document.querySelector('.container');
const input = document.querySelector('.inputSearch');
const loader = render.createLoading;
const showError = (message) => {
  iziToast.error({
    position: 'topRight',
    message: message,
  });
};

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = input.value;

  if (text === '') return showError(SEARCH_TEXT_ERR);

  container.innerHTML = '';
  container.append(loader);
  pixabayApi.getImages(text)
    .then(res => res.json())
    .then(data => {
      const { hits } = data;

      if (hits.length === 0) return showError(NO_IMAGES_ERR);

      const items = hits.map(img => render.createImgCard(img));
      container.innerHTML = '';
      container.append(...items);

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
      });

      lightbox.next();

    })
    .catch(err => console.log(err));
});