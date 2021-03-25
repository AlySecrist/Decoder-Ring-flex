'use strict';

// Write your tests here!

const expect = require('chai').expect;
const substitution = require('../src/substitution');

//*********************************** Encoding plain messages ***********************************

describe('substitution ENCODING', () => {
  it('should return false if the given alphabet is not exactly 26 characters long', () => {
    const short1 = substitution('hello world', 'qwertyuiopasdfghjklzxcvbn', true);
    const over1 = substitution('hello world', 'qwertyuiopasdfghjklzxcvbnm@', true);

    expect(short1).to.be.false &&
    expect(over1).to.be.false;
  });

  it('should correctly translate a phrase based on the alphabet passed into the function', () => {
    const actual = substitution('hello world', 'qwertyuiopasdfghjklzxcvbnm', true);
    const expected = 'itssg vgksr';

    expect(actual).to.equal(expected);
  });

  it('should return false if the given alphabet has any duplicate characters', () => {
    const actual = substitution('', 'qwertyuiopasdfghjklzxcvbnw', true);

    expect(actual).to.be.false;
  });

  it('should not alter spaces', () => {
    const actual = substitution('hello world', 'qwertyuiopasdfghjklzxcvbnm', true);
    const expected = 'itssg vgksr';

    expect(actual).to.equal(expected);
  });

  it('should treat capital letters as lower case', () => {
    const actual = substitution('HELLO hello', 'qwertyuiopasdfghjklzxcvbnm', true);
    const expected = 'itssg itssg';

    expect(actual).to.equal(expected);
  });
});

// =============================================================================================
// ***************************** Decoding already encoded messages *****************************

describe('substitution DECODING', () => {
  it('should return false if the given alphabet is not exactly 26 characters long', () => {
    const short1 = substitution('itssg vgksr', 'qwertyuiopasdfghjklzxcvbn', false);
    const over1 = substitution('itssg vgksr', 'qwertyuiopasdfghjklzxcvbnm@', false);

    expect(short1).to.be.false &&
    expect(over1).to.be.false;
  });

  it('should correctly translate a phrase based on the alphabet passed into the function', () => {
    const actual = substitution('itssg vgksr', 'qwertyuiopasdfghjklzxcvbnm', false);
    const expected = 'hello world';

    expect(actual).to.equal(expected);
  });

  it('should return false if the given alphabet has any duplicate characters', () => {
    const actual = substitution('itssg vgksr', 'qwertyuiopasdfghjklzxcvbny', false);

    expect(actual).to.be.false;
  });

  it('should not alter spaces', () => {
    const actual = substitution('itssg vgksr', 'qwertyuiopasdfghjklzxcvbnm', false);
    const expected = 'hello world';

    expect(actual).to.equal(expected);
  });

  it('should return all lower case letters', () => {
    const actual = substitution('ITSSG vgksr', 'qwertyuiopasdfghjklzxcvbnm', false);
    const expected = 'hello world';

    expect(actual).to.equal(expected);
  });


});