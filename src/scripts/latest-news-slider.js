function latestNewsSlider() {
  const latestNewsSwiper = new Swiper(".latest-news__swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
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

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  const prevButtons = document.getElementsByClassName("swiper-button-prev");
  const nextButtons = document.getElementsByClassName("swiper-button-next");

  // Function to show buttons on swiper
  function showButtons() {
    for (let i = 0; i < prevButtons.length; i++) {
      prevButtons[i].style.display = "block";
      nextButtons[i].style.display = "block";
    }
  }

  // Function to hide buttons on swiper
  function hideButtons() {
    for (let i = 0; i < prevButtons.length; i++) {
      prevButtons[i].style.display = "none";
      nextButtons[i].style.display = "none";
    }
  }

  latestNewsSwiper.el.addEventListener("mouseenter", showButtons);
  latestNewsSwiper.el.addEventListener("mouseleave", hideButtons);

  hideButtons();
}

export default latestNewsSlider;
