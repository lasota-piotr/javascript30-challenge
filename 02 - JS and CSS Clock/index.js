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
    const mins = now.getMinutes();
    const hours = now.getHours();


    if (seconds === 0) {
      hands.secondHand.style.transitionDuration = '0s';
    } else {
      hands.secondHand.style.transitionDuration = '0.3s';
    }
    if (mins === 0) {
      hands.minHand.style.transitionDuration = '0s';
    } else {
      hands.minHand.style.transitionDuration = '0.3s';
    }
    if (hours === 0) {
      hands.hourHand.style.transitionDuration = '0s';
    } else {
      hands.hourHand.style.transitionDuration = '0.3s';
    }


    const secondsDegrees = seconds * 6 + 90;
    const minsDegrees = mins * 6 + 90;
    const hoursDegrees = hours * 30 + 90;

    hands.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    hands.minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hands.hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }


  setInterval(() => setDate(hands), 1000);

}());
