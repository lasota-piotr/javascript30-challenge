(function() {
  'use strict';

  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.strokeStyle = '#E53A40';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 2;

  let isDrawing = false;
  let isIncrement = true;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;


  function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();

    // start from
    ctx.moveTo(lastX, lastY);

    // go to
    ctx.lineTo(e.offsetX, e.offsetY);

    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue += 1;
    if (hue >= 360) hue = 0;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) isIncrement = !isIncrement;
    if (isIncrement) { ctx.lineWidth += 1 }
    else { ctx.lineWidth -= 1 }
  }

  document.addEventListener('mousemove', draw);

  canvas.addEventListener('mousedown', e => {
    isDrawing = true;

    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

}());
