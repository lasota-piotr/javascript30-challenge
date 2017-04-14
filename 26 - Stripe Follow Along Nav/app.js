const triggers = document.querySelectorAll('.js-list__item');
const background = document.querySelector('.js-list-background');
const topNav = document.querySelector('.js-top');

function listEnterHandler(e) {
  e.target.classList.add('trigger-enter'); 
  setTimeout(() => {
    if (e.target.classList.contains('trigger-enter')){
      e.target.classList.add('trigger-enter-active');
    }
  }, 150);
  
  const dropdown = e.target.querySelector('.js-dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();

  background.style.width = `${dropdownCoords.width}px`;
  background.style.height = `${dropdownCoords.height}px`;
  background.style.top = `${dropdownCoords.top + window.scrollY}px`;
  background.style.left = `${dropdownCoords.left}px`;

  background.classList.add('is-open');

  console.log();
   
}

function listLeaveHandler(e) {
  e.target.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('is-open');
}

triggers.forEach(listItem => {
  listItem.addEventListener('pointerenter', listEnterHandler);
  listItem.addEventListener('pointerleave', listLeaveHandler);
});