'use strict';

// Write your tests here!

const expect = require('chai').expect;
const caesar = require('../src/caesar');

//*********************************** Encoding plain messages ***********************************

describe('caesar ENCODING', () => {
  it('should return false if shift value is 0, < -25, > 25, or not provided', () => {
    const test0 = caesar('hello world', 0);
    const testN25 = caesar('hello world', -25);
    const test25 = caesar('hello world', 25);
    const testNone = caesar('hello world');

    expect(test0).to.be.false &&
    expect(testN25).to.be.false &&
    expect(test25).to.be.false &&
    expect(testNone).to.be.false;
  });

  it('should treat capital letters as lower case', () => {
    const actual = caesar('Hello World', 1, true);
    const expected = 'ifmmp xpsme';

    expect(actual).to.equal(expected);
  });

  it('should wrap letters at the end of the alphabet to the front of the alphabet on a positive shift', () => {
    const actual = caesar('hello world', 10, true);
    const expected = 'rovvy gybvn';

    expect(actual).to.equal(expected);
  });

  it('should wrap letters at the front of the alphabet to the end of the alphabet on a negative shift', () => {
    const actual = caesar('hello world', -10, true);
    const expected = 'xubbe mehbt';

    expect(actual).to.equal(expected);
  });

  it('should not alter nonalphabetic characters such as spaces, numbers, and special characters', () => {
    const actual = caesar('life is 42!', 1, true);
    const expected = 'mjgf jt 42!';

    expect(actual).to.equal(expected);
  });
});

// =============================================================================================
// ***************************** Decoding already encoded messages *****************************

describe('caesar DECODING', () => {
  it('should return false if shift value is 0, < -25, > 25, or not provided', () => {
    const test0 = caesar('ifmmp xpsme', 0, false);
    const testN25 = caesar('ifmmp xpsme', -25, false);
    const test25 = caesar('ifmmp xpsme', 25, false);

    expect(test0).to.be.false &&
    expect(testN25).to.be.false &&
    expect(test25).to.be.false;
  });

  it('should treat capital letters as lower case', () => {
    const actual = caesar('Ifmmp Xpsme', 1, false);
    const expected = 'hello world';

    expect(actual).to.equal(expected);
  });

  it('should wrap letters at the front of the alphabet to the end of the alphabet on a positive shift', () => {
    const actual = caesar('rovvy gybvn', 10, false);
    const expected = 'hello world';

    expect(actual).to.equal(expected);
  });

  it('should wrap letters at the end of the alphabet to the front of the alphabet on a negative shift', () => {
    const actual = caesar('xubbe mehbt', -10, false);
    const expected = 'hello world';

    expect(actual).to.equal(expected);
  });

  it('should not alter nonalphabetic characters such as spaces, numbers, and special characters', () => {
    const actual = caesar('mjgf jt 42!', 1, false);
    const expected = 'life is 42!';

    expect(actual).to.equal(expected);
  });
});