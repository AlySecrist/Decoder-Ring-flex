'use strict';

// Write your tests here!

const expect = require('chai').expect;
const caesarModule = require('../src/caesar');

//*********************************** Encoding plain messages ***********************************

describe('caesarModule.caesar ENCODING', () => {
  it('should return false if shift value is 0, < -25, > 25, or not provided', () => {
    const test0 = caesarModule.caesar();
    const testN25 = caesarModule.caesar();
    const test25 = caesarModule.caesar();

    expect(test0).to.be.false;
    expect(testN25).to.be.false;
    expect(test25).to.be.false;
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