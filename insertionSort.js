// iterative

function insertionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i-1; 
    while ((j > -1) && (current < inputArr[j])) {
        inputArr[j+1] = inputArr[j];
        j--;
    }
    inputArr[j+1] = current;
  }
  return inputArr;
}

console.log(insertionSort([7,2,4,1,5,3])); //1,2,3,4,5,7
