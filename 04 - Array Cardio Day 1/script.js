// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642,
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630,
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543,
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947,
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852,
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905,
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
  },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// Using regular function
const fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true; // keep it!
  }
});

console.table(fifteen);

// Using arrow function
const fifteenArrow = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true; // keep it!
  }
});

console.table(fifteenArrow);

// Inline
const fifteenInline = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1599
);

console.table(fifteenInline);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(
  (inventor) => inventor.first + ' ' + inventor.last
);

console.table(fullNames);

// Using template strings/template literals
const fullNames2 = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

console.table(fullNames2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// Using regular function with if/else
const ordered = inventors.sort(function (firstPerson, secondPerson) {
  if (firstPerson.year > secondPerson.year) {
    return 1;
  } else {
    return -1;
  }
});

console.table(ordered);

// Using arrow function with ternerary operator
const ordered2 = inventors.sort((firstPerson, secondPerson) =>
  firstPerson.year > secondPerson.year ? 1 : -1
);

console.table(ordered2);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log('Total years lived: ' + totalYears);

// 5. Sort the inventors by years lived

// Using regular function and if/else
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed > a.lived;
  const nextGuy = b.passed > b.lived;
  if (lastGuy > nextGuy) {
    return 1;
  } else {
    return -1;
  }
});

console.table(oldest);

// Using regular function and ternarary operator
const oldest2 = inventors.sort(function (a, b) {
  const lastGuy = a.passed > a.lived;
  const nextGuy = b.passed > b.lived;
  return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest2);

// Using arrow function and ternarary operator
const oldest3 = inventors.sort((a, b) => {
  const lastGuy = a.passed > a.lived;
  const nextGuy = b.passed > b.lived;
  return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest3);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');

// Convert node list into an array method 1 (Array.from)
// const links = Array.from(category.querySelectorAll('a'));

// Convert node list into an array method 2 (Spread operator)
// THe spread operator takes every item out of an iterable (in this case a node list, and will put it into the containing array)
// const links = [...category.querySelectorAll('a')];

// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name

// Using regular function
const alpha = people.sort(function (lastOne, nextOne) {
  // Split names into first and last
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');

  return aLast > bLast ? 1 : -1;
});

console.log(alpha);

// Using arrow function
const alpha2 = people.sort((lastOne, nextOne) => {
  // Split names into first and last
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');

  return aLast > bLast ? 1 : -1;
});

console.log(alpha2);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
