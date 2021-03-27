'use strict';

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 8

function encodeCharacter(letter, alphabet, shift) {
  for (let i = 0; i < alphabet.length; i ++) {
    if (letter === alphabet[i]) {
      let encoded = i + shift;

      if (encoded > 25) {
        encoded = -1 + (encoded - 25);
      } else if (encoded < 0) {

        encoded = 26 + encoded;
      }
      
      return alphabet[encoded];
    }
  }
}

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    if (!shift || shift === 0 || shift <= -25 || shift >= 25) return false;

    let result = '';

    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i].toLowerCase();

        if (!letter.match(/[a-z]/i)) {
          result += letter;
        } else result += encodeCharacter(letter, alphabet, shift);
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;



/*
  The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

"thinkful" -> "wklqnixo"
When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

caesar()
The caesar() function in the src/caesar.js file has three parameters:

input refers to the inputted text to be encoded or decoded.
shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
encode refers to whether you should encode or decode the message. By default it is set to true.

When building the function, keep the following constraints and rules in mind:

If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
Spaces should be maintained throughout, as should other non-alphabetic symbols.
Capital letters can be ignored.
If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").
Examples
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
*/