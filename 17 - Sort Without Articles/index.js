(function() {
  'use strict';
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  function cutPrefix(str) {
    return str.replace(/^(a |the |an )/i, '');
  }

  const sortedBands = bands.sort((a, b) => {
    return (cutPrefix(b) > cutPrefix(a) ? -1 : 1);
  });

  const bandsContainer = document.querySelector('#bands');
  const bandsItems = sortedBands.map((element) => {
    return  `<li>${element}</li>`
  }).join('');
  bandsContainer.innerHTML = bandsItems;


}());
