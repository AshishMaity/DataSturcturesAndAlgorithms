const { initialize, swap } = require('./utility');
const ALGO_NAME = 'Selection';

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
}

initialize(ALGO_NAME)
  .then((unsortedArray) => selectionSort(unsortedArray))
  .then((sortedArray) => {
    console.log('Sorted Array:', sortedArray);
    console.log('Time Complexity: O(n^2)');
  });
