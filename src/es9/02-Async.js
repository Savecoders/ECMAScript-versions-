
async function* anotherGeneratir() {
  yield Promise.resolve('1');
  yield Promise.resolve('2');
  yield Promise.resolve('3');
}

const other = anotherGeneratir()

other.next().then((response) => {
  console.log(response.value)
})

other.next().then((response) => {
  console.log(response.value)
})

other.next().then((response) => {
  console.log(response.value)
})