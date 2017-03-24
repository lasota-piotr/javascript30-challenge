(function() {
  'use strict';


  const secretCode = 'lasso';
  const pressed = new Array(secretCode.length);

  document.addEventListener('keyup', function(event) {
    pressed.push(event.key);
    pressed.shift();

    const isAllEqual = pressed.reduce((allEqual, val, index) => {
      return allEqual && val === secretCode[index];
    }, true);

    console.log(pressed);

    if (isAllEqual) {
      console.log('HURRAY');
      cornify_add();
    }
  });
}());
