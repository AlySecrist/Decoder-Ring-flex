Instructions
You are tasked with building functions for an application that will either encode or decode a string using a variety of ciphers. For each cipher, you should make a series of tests using Mocha & Chai to confirm that your cipher works.

Below is a checklist of what you need to accomplish.

[ ] Complete the caesar() function. -->
[ ] Write tests for the caesar() function. -->
[ ] Complete the polybius() function. -->
[ ] Write tests for the polybius() function. -->
[ ] Complete the substitution() function. -->
[ ] Write tests for the substitution() function. -->
[ ] All tests are passing in Qualified. -->

<!-- *************************************************************************************************************************************************************************************************************** -->

To pass the project, all of the following must be true.

Caesar shift:
[ ] It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present. -->
[ ] It ignores capital letters. (For example, the results of A Message and a message should be the same.) -->
[ ] When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.) -->
[ ] It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding. -->

<!-- *************************************************************************************************************************************************************************************************************** -->

Polybius square:
[ ] When encoding, it translates the letters i and j to 42. -->
[ ] When decoding, it translates 42 to (i/j). -->
[ ] It ignores capital letters. (For example, the results of A Message and a message should be the same.) -->
[ ] It maintains spaces in the message, before and after encoding or decoding. -->

<!-- *************************************************************************************************************************************************************************************************************** -->

Substitution Cipher:
[ ] It returns false if the given alphabet isn't exactly 26 characters long. -->
[ ] It correctly translates the given phrase, based on the alphabet given to the function. -->
[ ] It returns false if there are any duplicate characters in the given alphabet. -->
[ ] It maintains spaces in the message, before and after encoding or decoding. -->
[ ] It ignores capital letters. (For example, the results of A Message and a message should be the same.) -->