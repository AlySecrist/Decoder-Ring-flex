'use strict';

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 8

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  function encodeCharacter(letter, alphabet, shift, encode = true) {
    for (let i = 0; i < alphabet.length; i ++) {
      if (letter === alphabet[i]) {
        let encoded = i + shift;
        
        if (encode === false) {
          encoded = i - shift;
        }
  
        if (encoded > 25) {
          encoded = -1 + (encoded - 25);
        } else if (encoded < 0) {
  
          encoded = 26 + encoded;
        }
        
        return alphabet[encoded];
      }
    }
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    if (!shift || shift === 0 || shift <= -25 || shift >= 25) return false;

    let result = '';

    for (let i = 0; i < input.length; i++) {
      const letter = input[i].toLowerCase();

      if (!letter.match(/[a-z]/i)) {
        result += letter;
      } else result += encodeCharacter(letter, alphabet, shift, encode);
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;