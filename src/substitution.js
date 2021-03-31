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

      if (encode === true) {
        result += encodeCharacter(char, alphabet);
      } else if (encode === false) {
        result += decodeCharacter(char, alphabet);
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;


/* 
  Substitution Cipher
image.png

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word "HELLO" would be translated as follows:

"H" becomes "R".
"E" becomes "M".
"L" becomes "W".
"O" becomes "L".
This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.

substitution()
The substitution() function in the src/substitution.js file has three parameters:

input refers to the inputted text to be encoded or decoded.
alphabet refers to substitution alphabet.
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

The input could include spaces and letters as well as special characters such as #, $, *, etc.
Spaces should be maintained throughout.
Capital letters can be ignored.
The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.
Examples
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
*/