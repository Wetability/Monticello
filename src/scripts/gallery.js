function getMorePictures() {
  const DOMSeeMoreButton = document.getElementById('js-gallery-buttton');
  const DOMGalleryWrapper = document.getElementById('js-gallery-wrapper');

  const imagePaths = [
    './assets/gallery-photo-1.png',
    './assets/gallery-photo-2.png',
    './assets/gallery-photo-3.png',
    './assets/gallery-photo-4.png',
    './assets/gallery-photo-5.png',
  ];

  DOMSeeMoreButton.addEventListener('click', function () {
    const DOMGalleryGridContainer = document.createElement('div');
    DOMGalleryGridContainer.classList.add('gallery__grid-container');

    imagePaths.forEach(function (path) {
      const DOMGridItem = document.createElement('div');
      DOMGridItem.classList.add('gallery__grid-item');

      const DOMGalleryImage = document.createElement('img');
      DOMGalleryImage.src = path;
      DOMGalleryImage.alt = 'photo';

      DOMGridItem.appendChild(DOMGalleryImage);
      DOMGalleryGridContainer.appendChild(DOMGridItem);
    });

    DOMGalleryWrapper.insertBefore(DOMGalleryGridContainer, DOMSeeMoreButton);
  });
}

export default getMorePictures;
