const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const exampleText = document.querySelector('.js-text');
exampleText.addEventListener('click', makeGreen);

function makeGreen() {
  exampleText.style.color = '#BADA55';
  exampleText.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', 'poop');

// Styled
console.log('%c I am some great text', 'font-size: 28px; background-color: #666');

// warning!
console.warn('Oh NOO');

// Error :|
console.error('Wrrr!');

// Info
console.info('I am Peter');

// Testing
console.assert(1 !== 1, 'Wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.dir(exampleText);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(dog.name);
  console.log(dog.age);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/lasota-piotr')
  .then(data => data.json())
  .then(dataJson => {
    console.timeEnd('fetching data');
    console.log(dataJson);
  });

// table
console.table(dogs);
