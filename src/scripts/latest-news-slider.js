function latestNewsSlider() {
  new Swiper('.latest-news__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,

    // Pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
}

export default latestNewsSlider;
