(function() {
  'use strict';

  const checklist = document.querySelector('.js-checklist');
  checklist.addEventListener('click', changedHandler);

  const checkListCheckboxes = document.querySelectorAll('.js-checklist__checkbox');

  let lastChecked = null;

  function changedHandler(event) {

    if (event.shiftKey && event.target.checked) {
      let inRange = false;

      checkListCheckboxes.forEach(element => {
        const currentlyClickedElement = event.target;
        if (element === lastChecked || element === currentlyClickedElement) {
          inRange = !inRange;
          return;
        }
        if (inRange) element.checked = true;
      });

    };

    lastChecked = event.target;
  }

}());
