const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should have a merge method", () => {
    expect(Sort.prototype.merge).to.be.a("function");
  });
  it("should return correctly sorted elements", () => {
    let input = [3, 11, 1, 2, 7, 5, 9];
    let mergeSort = new Sort(input);
    let expected = [1, 2, 3, 5, 7, 9, 11];
    let actual = mergeSort.sort();

    expect(actual).to.equal(expected);
  });
});
