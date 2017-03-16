(function() {
  'use strict';

  const hands = {
    secondHand : document.querySelector('.js-clock__hand--second'),
    minHand : document.querySelector('.js-clock__hand--min'),
    hourHand : document.querySelector('.js-clock__hand--hour')
  };


  function setDate(hands) {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds*6 + 90;
    hands.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  }


  setInterval(() => setDate(hands), 1000);

}());
