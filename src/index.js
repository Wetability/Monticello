// * Imports
import bannerSwiper from './scripts/banner-slider.js';
import feedback from './scripts/form.js';
import getMorePictures from './scripts/gallery.js';
import changeHeaderPosition from './scripts/header.js';
import latestNewsSlider from './scripts/latest-news-slider.js';

document.addEventListener('DOMContentLoaded', () => {
  latestNewsSlider();
  bannerSwiper();
  feedback();
  getMorePictures();
  changeHeaderPosition();
});
