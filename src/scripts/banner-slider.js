function bannerSwiper() {
  const bannerSwiper = new Swiper(".banner__swiper", {
    // Optional parameters
    loop: true,
    touchEventsTarget: "container",

    // Pagination
    pagination: {
      el: ".banner__swiper-pagination",
    },
  });
}

export default bannerSwiper;
