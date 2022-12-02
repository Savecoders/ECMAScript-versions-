
// Array flat

const messedArray = [1, 2, 3, [1, 2, 3, [1, 2, 3]], [4, 5, 6]];
const flatedArray = messedArray.flat();
const flatedArray2 = messedArray.flat(2);

console.log(flatedArray); // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ], 4, 5, 6 ]
console.log(flatedArray2); // [ 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6 ]

// FlatMapp
// The flatMap() method returns a new array formed by applying a given callback function 
// to each element of the array, and then flattening the result by one level. 
const messedArray2 = [1, 2, 3, 4, 5, 6];
const mapFlatArray = messedArray2.flatMap((value) => [value * 2, value * 3]);

console.log(mapFlatArray); // [ 2, 3, 4, 6, 6, 9, 8, 12, 10, 15, 12, 18 ]

