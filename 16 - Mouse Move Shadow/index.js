(function() {
  'use strict';

  const hero = document.querySelector('.js-hero');
  const titleHero = document.querySelector('.js-hero__title');
  const walk = 100; // 100px

  function shadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    titleHero.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.5),
      ${-xWalk}px ${yWalk}px 0 rgba(0, 255, 0, 0.5),
      ${xWalk}px ${-yWalk}px 0 rgba(0, 0, 255, 0.5)
    `;
  }

  hero.addEventListener('mousemove', shadow);
}());
