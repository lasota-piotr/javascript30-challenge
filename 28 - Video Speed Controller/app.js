
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
    this.speed.addEventListener('mousemove', this.changeValue.bind(this));
  },
  changeValue(e) {
    const percent = Math.round(e.offsetY * 100 / e.target.offsetHeight);
    const min = 0.4;
    const max = 4;
    console.log(percent);
    this.bar.style.height = `${percent}%`;
  }

}

videoPlayer.init();
