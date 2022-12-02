
// --------------------------
// Optional Chaining Operator
// --------------------------

// The optional chaining operator (?.) permits reading 
// the value of a property located deep within a chain of connected 
// objects without having to expressly validate that each reference 
// in the chain is valid. The ?. operator functions similarly to the . 
// chaining operator, except that instead of causing an error if a 
// reference is nullish (null or undefined), the expression short-circuits 
// with a return value of undefined. When used with function calls, 
// it returns undefined if the given function does not exist.


const users = {
  gndx: {
    country: "MX"
  },
  ana: {
    country: "CO"
  }
}
console.log(users?.bebeloper?.country);

// ------------------------------
// BigInt and Nullish (ES2020) 
// ------------------------------


// BigInt is a built-in object that provides a way to represent
// whole numbers larger than 253 - 1, which is the largest number
// JavaScript can reliably represent with the Number primitive and
// which is the largest integer in common use.

// after
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// before
const anotherBigInt = BigInt("1234567890123456789012345678901234567890");
console.log(anotherBigInt);

console.log(anotherBigInt === bigInt); // true

// ------------------------------
// Nullish (ES2020)
// ------------------------------
// nullish coalescing operator (??)


const anotherNumber = 1
const validate = anotherNumber ?? 0

console.log(validate) // 1

// other

const id = 0

// 0 is a falsy value
// falsy values are: 0, "", null, undefined, NaN, []

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log(orId) //  'Sin id'
console.log(nullishId)  // 0


// ------------------------------
// Promise.allSettled (ES2020)
// ------------------------------

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success 1')
  }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error 2')
  }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success 3')
  }, 1000)
})

// allSettled is a method that receives an array of promises

Promise.allSettled([promise1, promise2, promise3])
  .then((response) => {
    console.log(response)
  })


// ------------------------------
// globalThis (ES2020)
// ------------------------------

// globalThis is a property that returns the global this value,
// which is the global object associated with the current context.

console.log(globalThis)

// ------------------------------
// String.prototype.matchAll (ES2020)
// ------------------------------


// matchAll is a method that returns an iterator of all results 
// matching a string against a regular expression,

const string = "Hello World"
const regex = /Hello/g

const match = string.matchAll(regex) // returns an iterator


// ------------------------------
// dynamic import (ES2020)
// ------------------------------

// dynamic import is a new operator that allows you to import modules
// dynamically. This is useful when you want to import a module only
// if a certain condition is met.

const module = "./module.js"

if (true) {
  import(module)
    .then((module) => {
      module.method()
    })
}

