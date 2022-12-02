
// GlobalThis

// The globalThis property is a global object that represents the global scope of the 
// ECMAScript environment. It is similar 
// to the global object in that it provides global variables and global functions, 
// but it is not the global object itself.

console.log(window) // undefined in the node
console.log(global) // undefined in the browser
console.log(self) // web worker
console.log(globalThis) // globalThis is the global object
