

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['save', 'kaizen', 'not', 'alejo', 'nana'])


