
// iterative

function powerOfTwo(number) {
  if (number < 1) return false;

  while (number > 1) {
    if (number % 2 !== 0) {
      return false;
    }

    number = number / 2;
  }
  return true;
}

console.log(powerOfTwo(1));
console.log(powerOfTwo(121));
console.log(powerOfTwo(32));
