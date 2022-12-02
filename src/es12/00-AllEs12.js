
// ------------------
// numeric separators
// ------------------

// 1_000_000_000
// 1,000,000,000
// es una mejor forma de verlo

const value = 1_000_000_000
console.log(value) // 1000000000


// ------------------
// replaceAll
// ------------------

const string = "Hello World"
const regex = /Hello/g

const replace = string.replaceAll(regex, "Bye")
console.log(replace) // Bye World


const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
  let emojized = ""

  emojized = text.replaceAll(':)', '😀')
  emojized = emojized.replaceAll(':clap', '👏🏻')

  return emojized
}

console.log(emojiReplace(inputText))
// If you're 😀 and you know it 👏🏻 your hands 👏🏻 👏🏻


// --------------------------------
// promise.any and methods private
// --------------------------------

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

Promise.any([promise1, promise2, promise3])
  .then((response) => {
    console.log(response)
  })

// the first promise that is resolved is returned
// if all promises are rejected, the last error is returned


// private methods



