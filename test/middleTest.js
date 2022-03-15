const { expect } = require('chai');
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] when passed [1]", () => {
    expect(middle([1])).to.be.empty;
  });
  it("returns [] when passed [1, 2]", () => {
    expect(middle([1, 2])).to.be.empty;
  });
  it("returns [2] when passed [1, 2, 3]", () => {
    expect(middle([1, 2, 3])).to.deep.equal([2])
  });
  it("returns [3] when passed [1, 2, 3, 4, 5]", () => {
    expect(middle([1, 2, 3, 4, 5])).to.deep.equal([3])
  });
  it("returns [2, 3] when passed [1, 2, 3, 4]", () => {
    expect(middle([1, 2, 3, 4])).to.deep.equal([2, 3])
  });
  it("returns [3, 4] when passed [1, 2, 3, 4, 5, 6]", () => {
    expect(middle([1, 2, 3, 4, 5, 6])).to.deep.equal([3, 4])
  });
})
