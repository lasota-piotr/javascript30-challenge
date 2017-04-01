(function() {
  'use strict';

  const timeNodes = document.querySelectorAll('[data-time]');
  const seconds = [...timeNodes]
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat);
      return mins * 60 + secs;
    })
    .reduce((acc, val) => acc + val);

  const hours = Math.floor(seconds / 3600);
  let secondsLeft = seconds % 3600;
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft %= 60;
  console.log(hours, mins, secondsLeft);
}());
