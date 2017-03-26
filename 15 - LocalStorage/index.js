(function() {
  'use strict';

  const addItems = document.querySelector('.js-menu-list__add-form');
  const itemsList = document.querySelector('.js-menu-list__list-items');
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e) {
    e.preventDefault();

    const textInput = this.querySelector('.js-menu-list__add-input-text');
    const text = textInput.value;

    const item = {
      text,
      done: false
    }

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();

  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, index) => {
      return `
        <li class="c-menu-list__item">
          <input type="checkbox" data-index="${index}" id="item${index}"
            ${plate.done ? 'checked' : ''}
            class="c-menu-list__item-input">
          <label for="item${index}" class="c-menu-list__item-label">${plate.text}</label>
        </li>
      `
    }).join('');
  }


  function toggleDone(e) {
    if (!e.target.dataset.index) { return; }
    const indexItem = e.target.dataset.index;
    items[indexItem].done = !items[indexItem].done;
    localStorage.setItem('items', JSON.stringify(items));
  }


  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  populateList(items, itemsList)

}());
