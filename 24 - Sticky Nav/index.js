(function() {
  'use strict';

  const nav = document.querySelector('.js-nav');
  const topOfNav = nav.offsetTop;
  function fixNav(e) {
    if (window.scrollY >= topOfNav) {
      document.body.classList.add('has-fixed-nav');
      document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
      document.body.classList.remove('has-fixed-nav');
      document.body.style.paddingTop = 0;
    }
  }


  document.addEventListener('scroll', fixNav);
}());
