// * Imports
import bannerSwiper from './scripts/banner-slider.js';
import feedback from './scripts/form.js';
import latestNewsSlider from './scripts/latest-news-slider.js';

document.addEventListener('DOMContentLoaded', () => {
  latestNewsSlider();
  bannerSwiper();
  feedback();
});
