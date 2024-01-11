function changeHeaderPosition() {
  const DOMHeader = document.getElementById('js-header');

  // The styles that are already set at css, I write to these constants
  const initialBackgroundColor = getComputedStyle(DOMHeader).backgroundColor;

  window.addEventListener('scroll', function () {
    const isScrolled = window.scrollY > 900;

    if (isScrolled) {
      DOMHeader.style.backgroundColor = 'var(--c-blue)';
    } else {
      DOMHeader.style.backgroundColor = initialBackgroundColor;
    }
  });
}

export default changeHeaderPosition;
