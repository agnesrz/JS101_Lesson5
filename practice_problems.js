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
    maletotalAge += munsters[familyMember].age; 
  }
});

console.log(maleTotalAge);