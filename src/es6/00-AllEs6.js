// In the es6, create the let and const vars
// Destructuring in the objects 
// And Spreed Operator

let variable1; 


// Block scope
const stringmultiline = `this is a multiline string`;

const array = ['item1', 'item2'];
const array2 = ['item3', 'item4'];

// using spread operator
const allArrays = [...array, ...array2] // ['item1', 'item2' , 'item3', 'item4']


const object = {
	name: 'manuel',
	age: 24,
	country: 'PE',
};

const { name, age } = object; // 'manuel', 24

console.log(`${name} ${age}`)


// es5

var add = function (num1, num2) {
  return num1 + num2;
}

// es6 ->> TC39

const newAdd = (num1, num2) => num1 + num2;




