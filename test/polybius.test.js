'use strict';

// Write your tests here!

const expect = require('chai').expect;
const polybiusModule = require('../src/polybius');

//*********************************** Encoding plain messages ***********************************

describe('polybiusModule.polybius ENCODING', () => {
  it('should translate i and j to 42', () => {
    const actual = polybiusModule.polybius();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should treat capital letters as lower case.', () => {
    const actual = polybiusModule.polybius();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should not alter spaces', () => {
    const actual = polybiusModule.polybius();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should return an even number of number characters for each encoded word', () => {
    const actual = polybiusModule.polybius().length;
    const expected = 2;

    expect(actual).to.equal(expected);
  });
});


// =============================================================================================
// ***************************** Decoding already encoded messages *****************************

describe('polybiusModule.polybius DECODING', () => {
  it('should translate 42 to both i and j (i/j)', () => {
    const actual = polybiusModule.polybius();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should return all lower case.', () => {
    const actual = polybiusModule.polybius();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should not alter spaces', () => {
    const actual = polybiusModule.polybius();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should return flase if the number of number characters for each encoded word is not even', () => {
    const actual = polybiusModule.polybius().length;
    const expected = 2;

    expect(actual).to.equal(expected);
  });
});