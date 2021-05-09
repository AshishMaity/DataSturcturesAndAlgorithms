const { initialize } = require('./utility');
const ALGO_NAME = 'Linear';

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

initialize(ALGO_NAME)
  .then((data) => linearSearch(data.sortedArray, data.num))
  .then((index) => {
    if (index > 0) console.log('Element found at index:', index);
    else console.log('Element not found');
    console.log('Time Complexity: O(n)');
  });
