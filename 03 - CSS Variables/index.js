(function() {
  'use strict';
  const inputs = document.querySelector('.js-controls');

  function handleUpdate() {
    if (!event.target.classList.contains('js-controls__input')) {
      return
    }
    const suffix = event.target.dataset.sizing || '';
    document.documentElement.style.setProperty(
      `--${event.target.name}`, `${event.target.value}${suffix}`
    );
  }

  inputs.addEventListener('change', handleUpdate, false);
  inputs.addEventListener('mousemove', handleUpdate, false)

}());
