const { expect } = require('chai');
const twoSum = require('./twoSum')
describe('twoSum', () => {
  it('returns and empty array if no solution found', () => {
    expect(twoSum([1, 3, 10, 10], 20)).to.eql([]);
  });
});
