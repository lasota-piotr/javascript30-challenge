(function() {
  'use strict';
  function playSound(event) {
    const audio = document.querySelector(`.js-audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.js-key[data-key="${event.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0; // rewind to start
    audio.play();

    key.classList.add('is-playing');
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('is-playing');
  }

  const keys = document.querySelectorAll('.js-key');
  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition, false)
  });

  document.addEventListener('keydown', playSound, false);
}());
