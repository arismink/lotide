const { expect } = require('chai');
const tail = require('../tail');
const { assert } = require('chai');
 
describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] when passed ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const output = ["Lighthouse", "Labs"];
    // expect(tail(words)).to.deep.equal(output);
    assert.deepEqual(tail(words), output)
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    expect(tail([1, 2, 3])).to.deep.equal([2, 3]);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    expect(tail([1, 2, 3])).to.deep.equal([2, 3]);
  });
});
