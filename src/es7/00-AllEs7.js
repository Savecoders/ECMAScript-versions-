
let numbers = [1, 2, 4, 5, 9];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(15)); // false

const letters = { a: 1, b: 2, c: 3 }

// "a" in letras // true
letras.hasOwnProperty("a") // true
Object.hasOwn(letters, "a") // true

// exponencial

const base = 2;
const exponent = 16;

console.log(base ** exponent); // 65536
