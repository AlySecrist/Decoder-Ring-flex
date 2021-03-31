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
    //loop over key array
    for (let char in key) {
      //compare input letter to character in key
      if (letter === char) {
        //return if matching
        return key[char];
      }
    }
  }

  function breakDown(input) {
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
    return charWords;
  }

  function decode(charWords) {
    let result = '';
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
    return result;
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
    } else if (encode === false) {
      const charWords = breakDown(input);

      if (charWords === false) return charWords;
    
      result += decode(charWords);  
    }
    return result.trim();
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;