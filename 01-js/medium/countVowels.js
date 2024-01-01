/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const lowerstr = str.toLowerCase();
    const vowels   = ['a', 'e', 'i', 'o', 'u'];
    let num = 0;
    for( const char of lowerstr ) {
      if( vowels.includes( char ) ) {
        num++;
      }
    }
    return num;
}

module.exports = countVowels;