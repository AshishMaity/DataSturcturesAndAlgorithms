function sort(arr) {
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

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

async function initialize() {
  console.clear();
  console.log('###---Sorting Practice---###');
  const unsortedArray = [20, 4, 15, 23, 65, 21];
  console.log('Unsorted Array:', unsortedArray);
  return unsortedArray;
}

initialize()
  .then((unsortedArray) => sort(unsortedArray))
  .then((sortedArray) => console.log('Sorted Array:', sortedArray));
