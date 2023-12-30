function headerSwiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    touchEventsTarget: "container",

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}

export default headerSwiper;
