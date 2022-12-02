// class in es5

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.barking = function () { return `${this.name} says WOOF` }
}

const Kira = new Dog("Kira", 3)

Kira.barking();


// class in es6 -->

class user {

  constructor(name, age) {
    this.name = name
    this.age = age
    console.log('new user')
  }


  #speak() {
    return 'hello'
  }

  greeting() {
    return `${this.speak()} ${this.name}`
  }

  get #uAge() {
    return this.age
  }

  set #uAge(n) {
    this.age = n
  }

}

const save = new user("save", 19)

console.log(save.greeting())

console.log(save.uAge)

// create private methods with #
// this is a new feature in es12
