// recursive

function quickSort(inputArr) {
  if (inputArr.length < 2) return inputArr;

  let pivot = inputArr[inputArr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < inputArr.length - 1; i++) {
    if (inputArr[i] < pivot) left.push(inputArr[i]);
    else right.push(inputArr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([7,2,4,1,5,3])); //1,2,3,4,5,7
