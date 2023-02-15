// iterative

function factorial(number) {
  let ans = 1;

  for (let i = number; i > 0; i--) {
    ans = ans * i;
  }

  return ans;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));
