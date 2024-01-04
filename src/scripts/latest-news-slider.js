function latestNewsSlider() {
  const latestNewsSwiper = new Swiper(".latest-news__swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,

    // Pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export default latestNewsSlider;
