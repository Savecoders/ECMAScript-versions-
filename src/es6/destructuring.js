

const array = ['item1', 'item2'];
const array2 = ['item3', 'item4'];


// spread operator

let [item1, item2] = [...array]

let [,item4] = [...array2]

const allArrays = [...array, ...array2] // ['item1', 'item2' , 'item3', 'item4']


const object = {
	name: 'manuel',
	age: 24,
	country: 'PE',
};

const twoObject = {
  lastName: 'Constante'
}

const { name, age } = object; // 'manuel', 24


console.log(item1)
console.log({ ...object, ...twoObject})
