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
    this.customTimeEl = document.querySelector('.js-timer__form');
  },

  bindEvents() {
    this.controlsEl.addEventListener('click', this.startTimer.bind(this));
    this.customTimeEl.addEventListener('submit', this.startTimer.bind(this))
  },

  startTimer(e) {
    let countdownTimeS;

    // Get time from data-time
    if (e.target.classList.contains('js-timer__button')) {
      countdownTimeS = parseInt(e.target.dataset.time);
    
    // Get time from value in custom form
    } else if (e.target === this.customTimeEl) {
      e.preventDefault();
      if (!this.customTimeEl.minutes.value) { return; }
      countdownTimeS = parseInt(this.customTimeEl.minutes.value) * 60;
    } else {
      return;
    }

    this.endTime = new Date(Date.now() + countdownTimeS * 1000);
    this.setTimer(countdownTimeS);
    this.renderTimeEnd();
  },

  setTimer(countdownTimeSec) {
    const displayTimeLeft = () => {
      this.timeLeftS = Math.round((this.endTime.getTime() - Date.now()) / 1000);
      this.renderTimeLeft();
    }

    const intervalHandler = () => {
      displayTimeLeft();
      
      if ( this.timeLeftS <= 0) {
        console.log('END!!!');
        clearInterval(this.setIntervalID);
      }
    }

    displayTimeLeft();

    // reset interval
    if (this.setIntervalID !== undefined) { clearInterval(this.setIntervalID); }

    this.setIntervalID = window.setInterval(intervalHandler, 1000);
  },

  renderTimeLeft() {
    const secToMinSecStr = (seconds) => {
      const min = Math.floor(seconds / 60);
      const remSec = seconds % 60;
      return `${this.helpers.addZero(min)}:${this.helpers.addZero(remSec)}`
    }
    this.timeLeftEl.innerHTML = secToMinSecStr(this.timeLeftS);
    document.title = secToMinSecStr(this.timeLeftS);
  }, 

  renderTimeEnd() {
    const minutes = this.helpers.addZero(this.endTime.getHours());
    const seconds = this.helpers.addZero(this.endTime.getMinutes());
    this.endTimeEl.innerHTML = `${minutes}:${seconds}`;
  },

  helpers: {
    addZero(val) {
      return `${val < 10 ? '0' : ''}${val}`
    }
  }
}

timer.init();