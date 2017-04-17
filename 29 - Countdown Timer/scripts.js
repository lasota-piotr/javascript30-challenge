'use strict'
const timer = {

  init() {
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom() {
    this.controlsEl = document.querySelector('.js-timer__controls');
    this.timeLeftEl = document.querySelector('.js-display__time-left');
    this.endTimeEl = document.querySelector('.js-display__end-time');
  },
  bindEvents() {
    this.controlsEl.addEventListener('click', this.startTimer.bind(this));
  },
  startTimer(e) {
    if (e.target.classList.contains('js-timer__button')) {
      this.timeLeft = e.target.dataset.time;
      const currTime = new Date();
      // console.log(currTime.getTime());
      if (this.setIntervalID !== undefined) { clearInterval(this.setIntervalID); }
      this.setIntervalID = window.setInterval(() => {
        this.renderTimeLeft();
        if (this.timeLeft === 0) {
          console.log('END!!!');
          clearInterval(this.setIntervalID);
        }
        this.timeLeft -= 1;
      }, 200)
    }
  },
  renderTimeLeft() {
    function secToMinSecStr(seconds) {
      const min = Math.floor(seconds / 60);
      const remSec = seconds % 60;
      const minStr = `${min < 10 ? '0' : ''}${min}`
      const remSecStr = `${remSec < 10 ? '0' : ''}${remSec}`
      return `${minStr}:${remSecStr}`
    }

    this.timeLeftEl.innerHTML = secToMinSecStr(this.timeLeft);
  }, 
  renderTimeEnd() {

  }
}

timer.init();