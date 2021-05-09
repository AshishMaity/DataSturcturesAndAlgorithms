const { initialize } = require('./utility');
const ALGO_NAME = 'Binary';

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num && start <= end) {
    if (num < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === num ? middle : -1;
}

initialize(ALGO_NAME)
  .then((data) => binarySearch(data.sortedArray, data.num))
  .then((index) => {
    if (index > 0) console.log('Element found at index:', index);
    else console.log('Element not found');
    console.log('Time Complexity: O(log n)');
  });
