/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowerstr = str.toLowerCase();
  let escaped  = lowerstr.replace( /[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "" );
  escaped      = escaped.replace( /\s/g, "" );
  //console.log(escaped);
  for( let i = 0, j = escaped.length - 1; i < j; i++, j--) {
    if( escaped[i] !== escaped[j] ) {
      return false;
    }
  }
  return true;
}
//console.log(isPalindrome('Eva. can I see bees in a cave?'));
module.exports = isPalindrome;
