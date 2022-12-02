
// Array flat

const messedArray = [1, 2, 3, [1, 2, 3, [1, 2, 3]], [4, 5, 6]];
const flatedArray = messedArray.flat();
const flatedArray2 = messedArray.flat(2);

console.log(flatedArray); // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ], 4, 5, 6 ]
console.log(flatedArray2); // [ 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6 ]

// FlatMapp

const messedArray2 = [1, 2, 3, 4, 5, 6];
const mapFlatArray = messedArray2.flatMap((value) => [value * 2, value * 3]);

console.log(mapFlatArray); // [ 2, 3, 4, 6, 6, 9, 8, 12, 10, 15, 12, 18 ]


// trimStart and trimEnd

const hello = '     welcome to the jungle      '

console.log(`${hello} here is the end`); //     welcome to the jungle       here is the end
console.log(`${hello.trimStart()} here is the end`); // welcome to the jungle       here is the end
console.log(`${hello.trimEnd()} here is the end`);//      welcome to the jungle here is the end


// Symbol optional catch binding

try {
  // something
}
catch {
  // something
}

// FromEntries

const entries = [['name', 'jose'], ['age', 32]];
const obj = Object.fromEntries(entries);

console.log(obj); // { name: 'jose', age: 32 }

// Symbol description

const mySymbol = 'My Symbol';
const symbol = Symbol(mySymbol);
console.log(symbol.description); // My Symbol

