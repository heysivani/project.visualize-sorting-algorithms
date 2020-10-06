const { app } = require("./app");

class MergeSort {
  constructor(array) {
    this.unsorted = array;
    this.sorted = [];

    // for visualization
    this.stepCount = 0;
    this.unsortedSteps = [];
    this.sortedSteps = [];
    this.mergedSteps = [];
  }
  merge(left, right) {
    // https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
    // needed help to get this function working ^

    let merged = [];
    let indexL = 0;
    let indexR = 0;

    while (indexL < left.length && indexR < right.length) {
      if (left[indexL] < right[indexR]) {
        merged.push(left[indexL]);
        indexL++;
      }
      if (right[indexR] < left[indexL]) {
        merged.push(right[indexR]);
        indexR++;
      }
    }

    // I don't understand this yet???? VVVVVV
    return merged.concat(left.slice(indexL)).concat(right.slice(indexR));
  }
  sort(array = this.unsorted) {
    // TEST EVENT
    if (this.stepCount === 0) {
      const sortEvent = new CustomEvent("call sort");
      document.dispatchEvent(sortEvent);
      this.stepCount++;
    }

    // if array contains less than 2 elements, it can't be divided further
    if (array.length < 2) {
      // merge it and exit this recursive call
      return array;
    }

    // if it has more than 1 element...
    // find mid
    const mid = Math.floor(array.length / 2);

    // get left and right half of this array
    const unsortedLeft = array.slice(0, mid);
    const unsortedRight = array.slice(mid);

    // for visualization - object that stores left and right *unsorted* arrays
    let unsortedCombo = {};
    unsortedCombo.left = unsortedLeft;
    unsortedCombo.right = unsortedRight;
    this.unsortedSteps.push(unsortedCombo);

    // recurse with left and right half
    let sortedLeft = this.sort(unsortedLeft);
    let sortedRight = this.sort(unsortedRight);

    // for visualization - object that stores left and right *sorted* arrays
    let sortedCombo = {};
    sortedCombo.left = sortedLeft;
    sortedCombo.right = sortedRight;
    this.sortedSteps.push(sortedCombo);

    // for visualization - store merged arrays
    let mergedStep = this.merge(sortedLeft, sortedRight);
    this.mergedSteps.push(mergedStep);

    // merge once both sides are sorted
    return this.merge(sortedLeft, sortedRight);
  }
  printSteps() {
    console.log("print!");
    console.log("unsorted " + JSON.stringify(this.unsortedSteps));
    console.log("sorted " + JSON.stringify(this.sortedSteps));
    console.log("merged " + JSON.stringify(this.mergedSteps));
    return;
  }
}

module.exports = MergeSort;
