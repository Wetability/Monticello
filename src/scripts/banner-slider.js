function bannerSwiper() {
  new Swiper(".banner__swiper", {
    // Optional parameters
    loop: true,
    touchEventsTarget: "container",
    direction: "vertical",
    // Pagination
    pagination: {
      el: ".banner__swiper-pagination",
    },
  });
}

export default bannerSwiper;
