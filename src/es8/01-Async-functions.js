

const fnAsync = () => (
  new Promise((resolve, reject) => {
      (true) 
      ? setTimeout(() => { resolve('Async') }, 3000)
      : reject(new Error('error :v'));
  })
)

const anotherFn = async () => {
  const something = await fnAsync()
  console.log(something)
  console.log('hello')
}


console.log('before')
await anotherFn()
console.log('after')
