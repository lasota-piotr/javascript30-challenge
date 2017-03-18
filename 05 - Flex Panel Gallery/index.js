(function() {
  'use strict';

  const panels = document.querySelector('.js-panels');

  function eventPanelsClickHandler(event) {
    var currentPanelItem;
    if (event.target.classList.contains('js-panels')) {
      return;
    }


    if (event.target.classList.contains('js-panels__item')) {
      currentPanelItem = event.target;
    } else {
      currentPanelItem = event.target.closest('.js-panels__item');
    }
    currentPanelItem.classList.toggle('is-open');

  }

  panels.addEventListener('click', eventPanelsClickHandler);

}());
