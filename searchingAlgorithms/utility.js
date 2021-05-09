class Utility {
  async initialize(algoName) {
    console.clear();
    console.log(`####---${algoName} Search---####`);
    const sortedArray = [4, 15, 23, 44, 50, 60, 65, 71];
    const randomSearchElement =
      sortedArray[Math.floor(Math.random() * sortedArray.length)];
    console.log('sorted Array:', sortedArray);
    console.log('Search Element:', randomSearchElement);

    return { sortedArray, num: randomSearchElement };
  }
}

module.exports = new Utility();
