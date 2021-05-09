class Utility {
  swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  }

  async initialize(algoName) {
    console.clear();
    console.log(`####---${algoName} Sort---####`);
    const unsortedArray = [20, 4, 15, 23, 65, 21];
    console.log('Unsorted Array:', unsortedArray);
    return unsortedArray;
  }
}

module.exports = new Utility();
