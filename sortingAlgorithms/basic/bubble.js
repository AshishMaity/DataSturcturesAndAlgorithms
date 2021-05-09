const { initialize, swap } = require('./utility');
const ALGO_NAME = 'Bubble';

function bubbleSort(arr) {
  let noSwaps = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

initialize(ALGO_NAME)
  .then((unsortedArray) => bubbleSort(unsortedArray))
  .then((sortedArray) => {
    console.log('Sorted Array:', sortedArray);
    console.log('Time Complexity: O(n^2)');
  });
