'use strict';

// Write your tests here!

const expect = require('chai').expect;
const substitutionModule = require('../src/substitution');

//*********************************** Encoding plain messages ***********************************

describe('substitutionModule.substitution ENCODING', () => {
  it('should return false if the given alphabet is not exactly 26 characters long', () => {
    const actual = substitutionModule.substitution();

    expect(actual).to.be.false;
  });

  it('should correctly translate a phrase based on the alphabet passed into the function', () => {
    const actual = substitutionModule.substitution();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should return false if the given alphabet has any duplicate characters', () => {
    const actual = substitutionModule.substitution();

    expect(actual).to.be.false;
  });

  it('should not alter spaces', () => {
    const actual = substitutionModule.substitution();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should treat capital letters as lower case', () => {
    const actual = substitutionModule.substitution();
    const expected = '';

    expect(actual).to.equal(expected);
  });
});

// =============================================================================================
// ***************************** Decoding already encoded messages *****************************

describe('substitutionModule.substitution DECODING', () => {
  it('should return false if the given alphabet is not exactly 26 characters long', () => {
    const actual = substitutionModule.substitution();

    expect(actual).to.be.false;
  });

  it('should correctly translate a phrase based on the alphabet passed into the function', () => {
    const actual = substitutionModule.substitution();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should return false if the given alphabet has any duplicate characters', () => {
    const actual = substitutionModule.substitution();

    expect(actual).to.be.false;
  });

  it('should not alter spaces', () => {
    const actual = substitutionModule.substitution();
    const expected = '';

    expect(actual).to.equal(expected);
  });

  it('should return all lower case letters', () => {
    const actual = substitutionModule.substitution();
    const expected = '';

    expect(actual).to.equal(expected);
  });


});