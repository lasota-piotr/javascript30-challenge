
const videoPlayer = {
  init() {
    this.cacheDom();
    this.bindEvents();
  }, 
  cacheDom() {
    this.speed = document.querySelector('.js-speed');
    this.bar = document.querySelector('.js-speed-bar');
    this.video = document.querySelector('.js-video');
  },
  bindEvents() {
    this.speed.addEventListener('mousemove', this.changeSpeed.bind(this));
  },
  changeSpeed(e) {
    function mapRange(value, low1, high1, low2, hight2) {
      return low2 + (hight2 - low2) * (value - low1) / (high1 - low1);
    }
    const percent = Math.round(e.offsetY * 100 / this.speed.offsetHeight);
    const [min, max] = [0.4, 4];
    const playbackRate = mapRange(percent, 0, 100, 0.4, 4); 
    this.bar.style.height = `${percent}%`;
    this.bar.textContent = `${playbackRate.toFixed(2)}x`;
    this.video.playbackRate = playbackRate;
    console.log(this.video.playbackRate);
  }

}

videoPlayer.init();
