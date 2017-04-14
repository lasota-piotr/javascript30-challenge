const slider = document.querySelector('.js-items');
// let mouseIsOver = false;
let isMouseDown = false
let xStart;
let scrollLeftStart;

function changeIsMouseDown(bool = false) {
  
  if (bool) {
    isMouseDown = true;
    slider.classList.add('active');
  } else {
    isMouseDown = false;
    slider.classList.remove('active');
  }
}

function mouseLeaveHandler() {
  changeIsMouseDown(false);
}

function mouseDownHandler(e) {
  xStart = e.screenX - slider.offsetLeft;
  scrollLeftStart = slider.scrollLeft;
  
  changeIsMouseDown(true);
}

function mouseUpHandler(e) {
  changeIsMouseDown(false);
}

function mouseMoveHandler(e) {
  if (!isMouseDown) { return; }
  e.preventDefault();

  const moveDiff = xStart - (e.screenX - slider.offsetLeft);
  slider.scrollLeft = scrollLeftStart + moveDiff
}

slider.addEventListener('mouseleave', mouseLeaveHandler);
slider.addEventListener('mousedown', mouseDownHandler);
slider.addEventListener('mouseup', mouseUpHandler);
slider.addEventListener('mousemove', mouseMoveHandler);