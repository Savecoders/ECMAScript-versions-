
const coolSong = (iAmABadass) => {

  return new Promise((resolve, reject) => {
    if (iAmABadass === true) {
      return setTimeout(() => resolve('Welcome to the jungle'), 2000);
    }
    return setTimeout(() => reject('All about that bass'), 2000);
  })
};

console.log('The coolest song is...');

coolSong(true)
  .then((song) => {
    console.log(song);
  })
  .catch((error) => {
    console.log(`Aparently something went wrong: The result is ${error}`);
  })
  .finally(() => {
    console.log('They are all good songs :D');
  })
