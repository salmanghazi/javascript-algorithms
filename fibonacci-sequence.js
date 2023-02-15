// iterative

function fib(number) {
  const array = [0, 1];

  for (let i = 2; i < number; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array;
}

console.log(fib(5));
