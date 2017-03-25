(function() {
  'use strict';

  const addItems = document.querySelector('.js-menu-list__add-form');
  const itemsList = document.querySelector('.js-menu-list__list-items');
  const items = [];

  function addItem(e) {
    e.preventDefault();

    const textInput = this.querySelector('.js-menu-list__add-input-text');
    const text = textInput.value;

    const item = {
      text,
      done: false
    }

    items.push(item);
    this.reset();
    populateList(items, itemsList);
  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, index) => {
      return `
        <li>
          <label for="">${plate.text}</label>
        </li>
      `
    }).join('');
  }



  addItems.addEventListener('submit', addItem);

}());
