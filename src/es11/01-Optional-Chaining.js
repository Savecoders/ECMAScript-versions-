
// Optional Chaining Operator


const users = {
  gndx: {
    country: "MX"
  },
  ana: {
    country: "CO"
  }
}

console.log(users?.ana?.country); // CO
console.log(users?.bebeloper?.country); // undefined no error
