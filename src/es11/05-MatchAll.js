
// matchAll is a method that returns an iterator of all results 
// matching a string against a regular expression,

const string = "Hello World"
const regex = /Hello/g

const match = string.matchAll(regex)

console.log(match.next().value) // [ 'Hello', index: 0, input: 'Hello World', groups: undefined ]