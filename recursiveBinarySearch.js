// Recursive

function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, high);
  } else {
    return binarySearchRecursive(arr, target, low, mid - 1);
  }
}

console.log(binarySearchRecursive([-2, 2, 4, 6, 9, 10], 10));
console.log(binarySearchRecursive([-2, 2, 4, 6, 9, 10], 101));
console.log(binarySearchRecursive([-2, 2, 4, 6, 9, 10], 2));
