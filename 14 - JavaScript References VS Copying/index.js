// start with strings, numbers and booleans
let age = 100;
let age2 = age;
// console.log(age, age2);
age = 200;
// console.log(age, age2);

let name = 'Piotr';
let name2 = name;

// console.log(name, name2);

name = 'Tom';
// console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
// console.log(players, team);

// You might think we can just do something like this:

// console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
team2[3] = 'Lux';
// console.log(players, team2);
// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
// console.log(players, team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = '123123';
// console.log(players, team4);

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Piotr Lasota',
  age: 99
}

// and think we make a copy:
// const captain = person;
// captain.name = 'John';
//
// console.log(person, captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {age: 12});
// console.log(person, cap2);

// We will hopefully soon see the object ...spread
// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const pit = {
  name: 'Pit',
  age: 101,
  social: {
    twitter: '@pit',
    facebook: 'pit'
  }
}
const dev = Object.assign({}, pit);
console.log(pit, dev);
dev.name = 'Piter';
console.log(pit, dev);
