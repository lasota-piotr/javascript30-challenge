(function() {
  'use strict';

  const player = document.querySelector('.js-player');
  const video = document.querySelector('.js-player__video');
  const progress = document.querySelector('.js-player__progress');
  const progressBar = document.querySelector('.js-player__progress-filled');
  const toggle = document.querySelector('.js-player__play-toggle');
  const skipButtons = document.querySelectorAll('.js-player__skip-button');
  const ranges = document.querySelectorAll('.js-player__slider')

  let isMousedown = false;

  function togglePlay() {
    const method = video.paused ? video.play() : video.pause();
  }

  function updateToggleButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
  }

  function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
  }

  function handleRangeUpdate(event) {
    if (!(event instanceof MouseEvent && isMousedown)) {
      return;
    }
    video[this.name] = this.value;
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  function scrub(event) {
    if (!(event instanceof MouseEvent && isMousedown)) {
      return;
    }

    const newTime = video.duration * (event.offsetX / this.clientWidth);
    video.currentTime = parseFloat(newTime);
  }

  video.addEventListener('click', togglePlay);

  video.addEventListener('play', updateToggleButton);

  video.addEventListener('pause', updateToggleButton);

  video.addEventListener('timeupdate', handleProgress);

  toggle.addEventListener('click', togglePlay);

  skipButtons.forEach(element => {
    element.addEventListener('click', skip);
  });

  ranges.forEach(element => {
    element.addEventListener('change', handleRangeUpdate);
  });

  ranges.forEach(element => {
    element.addEventListener('mousemove', handleRangeUpdate);
  });

  /**
   * Progress
   */

  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', scrub);


  /**
   * changing flag isMousedown
   */

  document.addEventListener('mousedown', () => {
    isMousedown = true;
  });

  document.addEventListener('mouseup', () => {
    isMousedown = false;
  });

}());
