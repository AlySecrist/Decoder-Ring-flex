'use strict';

// Write your tests here!

/*
Caesar shift:
[x] It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
[x] It ignores capital letters. (For example, the results of A Message and a message should be the same.)
[x] When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
[x] It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
*/

const expect = require('chai').expect;
const caesarModule = require('../src/caesar');

//*********************************** Encoding plain messages ***********************************

describe('caesarModule.caesar ENCODING', () => {
  it('should return false if shift value is 0, < -25, > 25, or not provided', () => {
    const actual = caesarModule.caesar();

    expect(actual).to.be.false;
  });

  it('should treat capital letters as lower case', () => {
    const actual = caesarModule.caesar();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should wrap x, y, and z to the front of the alphabet', () => {
    const actual = caesarModule.caesar();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should not alter nonalphabetic characters such as spaces, numbers, and special characters', () => {
    const actual = caesarModule.caesar();
    const expected = '';

    expect(actual).to.equal(expected);
  });
});

// =============================================================================================
// ***************************** Decoding already encoded messages *****************************

describe('caesarModule.caesar DECODING', () => {
  it('should return false if shift value is 0, < -25, > 25, or not provided', () => {
    const actual = caesarModule.caesar();

    expect(actual).to.be.false;
  });

  it('should treat capital letters as lower case', () => {
    const actual = caesarModule.caesar();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should wrap x, y, and z to the front of the alphabet', () => {
    const actual = caesarModule.caesar();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should not alter nonalphabetic characters such as spaces, numbers, and special characters', () => {
    const actual = caesarModule.caesar();
    const expected = '';

    expect(actual).to.equal(expected);
  });
});