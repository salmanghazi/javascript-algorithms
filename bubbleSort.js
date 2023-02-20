// iterative

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([221, -12, 2202, 100, 1, 2, -10]));
