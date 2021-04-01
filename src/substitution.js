'use strict';

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function hasDuplicates(alphabet) {
    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
      if (alphabet.indexOf(letter) !== alphabet.lastIndexOf(letter)) return true;
    }
  }

  function encodeCharacter(char, alphabet) {
    for (let l = 0; l < key.length; l ++) {
      const letter = key[l];
      if (char === ' ') return char;
      else if (letter === char) return alphabet[l];
    }
  }

  function decodeCharacter(char, alphabet) {
    for (let l = 0; l < alphabet.length; l++) {
      const letter = alphabet[l];
      if (char === ' ') return char;
      else if (letter === char) return key[l];
    }
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    
    if (! alphabet || alphabet.length !== 26 || hasDuplicates(alphabet) === true) return false;

    let result = '';
  
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (char.match(/[a-z]/i)) char = char.toLowerCase();

      encode === true ? result += encodeCharacter(char, alphabet) : result += decodeCharacter(char, alphabet);
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;