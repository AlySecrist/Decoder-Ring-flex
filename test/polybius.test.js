'use strict';

// Write your tests here!

const expect = require('chai').expect;
const polybius = require('../src/polybius');

//*********************************** Encoding plain messages ***********************************

describe('polybius ENCODING', () => {
  it('should translate i and j to 42', () => {
    const actual = polybius('highjack', true);
    const expected = '3242223242113152';

    expect(actual).to.equal(expected);
  });

  it('should treat capital letters as lower case.', () => {
    const actual = polybius('HELLO hello', true);
    const expected = '3251131343 3251131343';

    expect(actual).to.equal(expected);
  });

  it('should not alter spaces', () => {
    const actual = polybius('hello world', true);
    const expected = '3251131343 2543241341';

    expect(actual).to.equal(expected);
  });

  it('should return an even number of number characters for each encoded word', () => {
    const actual = polybius('hello', true).length;
    const expected = 10;

    expect(actual).to.equal(expected);
  });

  it('should return the encoded message as string', () => {
    const actual = typeof(polybius('hello', true));

    expect(actual).to.be.a('string');
  });
});


// =============================================================================================
// ***************************** Decoding already encoded messages *****************************

describe('polybius DECODING', () => {
  it('should translate 42 to both i and j (i/j)', () => {
    const actual = polybius('3242223242113152', false);
    const expected = 'h(i/j)gh(i/j)ack';

    expect(actual).to.equal(expected);
  });

  it('should return all lower case.', () => {
    const actual = polybius('3251131343 3251131343', false);
    const expected = 'hello hello';

    expect(actual).to.equal(expected);
  });

  it('should not alter spaces', () => {
    const actual = polybius('3251131343 2543241341', false);
    const expected = 'hello world';

    expect(actual).to.equal(expected);
  });

  it('should return false if the number of number characters for each encoded word is not even', () => {
    const actual = polybius('325113134', false).length;

    expect(actual).to.be.false;
  });
});