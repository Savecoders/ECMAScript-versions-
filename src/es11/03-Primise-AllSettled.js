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
