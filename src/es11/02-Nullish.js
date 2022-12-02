

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