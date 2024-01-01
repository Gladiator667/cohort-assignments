/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if( numbers.length === 0 ) {
        return;
    } else if( numbers.length === 1 ) {
        return numbers[0];
    }
    let bigInt = numbers[0];
    numbers.forEach(num => {
        if( num > bigInt ) {
            bigInt = num;
        }
    });
    return bigInt;
}

module.exports = findLargestElement;