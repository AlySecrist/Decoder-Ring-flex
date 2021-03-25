'use strict';

// Write your tests here!

/*
Polybius square:
[x] When encoding, it translates the letters i and j to 42. -->
[x] When decoding, it translates 42 to (i/j). -->
[x] It ignores capital letters. (For example, the results of A Message and a message should be the same.) -->
[x] It maintains spaces in the message, before and after encoding or decoding. -->
*/

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