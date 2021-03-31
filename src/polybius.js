'use strict';

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const key = {
    a: '11',
    b: '21',
    c: '31',
    d: '41',
    e: '51',
    f: '12',
    g: '22',
    h: '32',
    i: '42',
    j: '42',
    k: '52',
    l: '13',
    m: '23',
    n: '33',
    o: '43',
    p: '53',
    q: '14',
    r: '24',
    s: '34',
    t: '44',
    u: '54',
    v: '15',
    w: '25',
    x: '35',
    y: '45',
    z: '55',
  };

  function encodeCharacter(letter) {
    for (let char in key) {
      if (letter === char) {
        return key[char];
      }
    }
  }

  function breakDown(input) {
    
  }

  function polybius(input, encode = true) {
    // your solution code here
    let result = '';

    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i].toLowerCase();

        if (!letter.match(/[a-z]/i)) {
          result += letter;
        } else result += encodeCharacter(letter);
      } 
    }
    else if (encode === false) {
      //break down phrase into words
      const words = input.split(' ');
      let charWords = [];
      
      //check for even length
      if (words.some((word) => word.length % 2 !== 0)) return false;
      
      //break down words into characters
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        charWords.push(word.match(/.{1,2}/g));
      }

      //loop over array of words
      for (let i = 0; i < charWords.length; i ++) {
        const word = charWords[i];

        //loop over array of characters
        for (let j = 0; j < word.length; j++) {
          let char = word[j];
          
          //check for 42
          if (char === '42') result += '(i/j)';

          //loop over key object
          else {
            for(let c in key) {
              //compare key to character
              if (char === key[c]) result += c;
            }
          }
        }
        result += ' ';
      }
    }

    // console.log(`result: ${result}`);
    return result.trim();
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;

/*
  Polybius Square
  1	2	3	4	5
1	A	B	C	D	E
2	F	G	H	I/J	K
3	L	M	N	O	P
4	Q	R	S	T	U
5	V	W	X	Y	Z
The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

"thinkful" -> "4432423352125413"
When decoding the message, each pair of numbers is translated using the coordinates.

polybius()
The polybius() function in the src/polybius.js file has two parameters:

input refers to the inputted text to be encoded or decoded.
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
When encoding, your output should still be a string.
When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
Spaces should be maintained throughout.
Capital letters can be ignored.
The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
Examples
polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false
*/
