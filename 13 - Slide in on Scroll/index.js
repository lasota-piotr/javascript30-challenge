(function() {
  'use strict';

  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.js-image');


  function checkSlide(e) {
    sliderImages.forEach(slideImage => {
      const slideInAt =
        (window.scrollY + window.innerHeight) - slideImage.height / 2;
      const imageBottom = slideImage.offsetTop + slideImage.height;

      const isHalfShow = slideInAt > slideImage.offsetTop;
      const isNotScrolledPast = imageBottom > window.scrollY;
      if (isHalfShow && isNotScrolledPast) {
        slideImage.classList.add('active');
      } else {
        slideImage.classList.remove('active');
      }

    });
  }

  document.addEventListener('scroll', debounce(checkSlide));

}());
