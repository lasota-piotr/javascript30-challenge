/* jshint esversion: 6 */
(function() {
  'use strict';

  const divs = document.querySelectorAll('div');
  const btn = document.querySelector('.js-btn');

  function logText(e) {
    console.log(this);
    // e.stopPropagation(); // stop bubbling
  }

  divs.forEach(function(div) {
    div.addEventListener('click', logText, {
      capture: false,
      once: false // after one click addEventListener is removed
    });
  });

  btn.addEventListener('click', () => {
    console.log('btn clicked');
  }, {
    once: true
  });
  // document.body.addEventListener('click', logText, false);
}());
