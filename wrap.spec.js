const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns a string correctly wrapped', () => {
    expect(wrap("Hello World!", 6)).to.equal("Hello\nWorld!")
  })

});