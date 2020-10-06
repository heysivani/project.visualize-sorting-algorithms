class MergeSort {
  constructor(array) {
    this.unsorted = array;
    this.sorted = [];
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

    // recurse with left and right half
    let sortedLeft = this.sort(unsortedLeft);
    let sortedRight = this.sort(unsortedRight);

    // merge once both sides are sorted
    console.log("result " + this.merge(sortedLeft, sortedRight));
    return this.merge(sortedLeft, sortedRight);
  }
}

module.exports = MergeSort;
