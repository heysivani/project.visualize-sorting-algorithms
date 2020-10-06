const MergeSort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(MergeSort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(MergeSort.prototype.sort).to.be.a("function");
  });
  it("should have a merge method", () => {
    expect(MergeSort.prototype.merge).to.be.a("function");
  });
  it("should return correctly sorted elements", () => {
    let input = [3, 11, 1, 2, 7, 5, 9];
    let testSort = new MergeSort(input);
    let expected = [1, 2, 3, 5, 7, 9, 11];
    let actual = testSort.sort();

    expect(actual).to.deep.equals(expected);
  });
});
