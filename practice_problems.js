// Problem 1
let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => {
  a = Number(a);
  b = Number(b);
  
  return b - a;
});

// Problem 2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => a.published - b.published);

// Problem 3
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
arr1[2][1][3];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
arr2[1].third[0];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
arr3[2].third[0][0];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
obj1.b[1];

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
Object.keys(obj2.third)[0];

// Problem 4
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;

// Problem 5
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleTotalAge = 0;

Object.keys(munsters).forEach(familyMember => {
  if (munsters[familyMember].gender === 'male') {
    maleTotalAge += munsters[familyMember].age; 
  }
});

console.log(maleTotalAge);

// Problem 6
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.keys(munsters).forEach(member => {
  let age = munsters[member].age;
  let gender = munsters[member].gender;
  
  console.log(`${member} is an ${age}-year old ${gender}.`);
});

// Problem 8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

Object.values(obj).forEach(array => {
  array.forEach(word => {
    word.split('').forEach(letter => {
      if (VOWELS.includes(letter)) {
        console.log(letter);
      }
    });   
  });
})

// Problem 9
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let sortedArray = JSON.parse(JSON.stringify((arr)));

sortedArray.forEach(array => {
  if (typeof array[0] === 'string') {
    array.sort();
  } else {
    array.sort((a, b) => a - b);
  }
});

console.log(sortedArray);

// Problem 10
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

console.log(arr.map(subArray => {
  if (typeof subArray[0] === 'string') {
    return subArray.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return subArray.slice().sort((a, b) => b - a);
  }
}));

// Problem 11
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let updatedObj = Object.assign({}, obj);
  for (let key in updatedObj) {
    updatedObj[key] += 1;
  }
  return updatedObj;
});

console.log(newArr);

// Problem 12
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(array => {
  return array.filter(value => value % 3 === 0);
});

console.log(newArr);

// Problem 13
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let sumOfOddNumsReducer = ((acc, currVal) => {
  if (currVal % 2 !== 0) {
    return acc + currVal;
  } else {
    return acc;
  }
});

arr.sort((a, b) => {
  let sumOfOddNumsA = a.reduce(sumOfOddNumsReducer, 0);
  let sumOfOddNumsB = b.reduce(sumOfOddNumsReducer, 0);

  return sumOfOddNumsA - sumOfOddNumsB;
});

console.log(arr);

// Problem 14
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let fruitVegArray = [];

for (let key in obj) {
  if (obj[key].type === 'fruit') {
    fruitVegArray.push(obj[key].colors.map(color => {
      return color.slice(0, 1).toUpperCase() +
             color.slice(1);
    }));
  } else {
    fruitVegArray.push(obj[key].size.toUpperCase());
  }
}

console.log(fruitVegArray);

// Problem 15
