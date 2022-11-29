
// return object in es5 

function newUser(user, age, country) {
  return {
    user: user,
    age: age,
    country: country
  }
}

// return object in es6 -->

function newUserEs6(user, age, country) {
  return {user, age, country}
}
