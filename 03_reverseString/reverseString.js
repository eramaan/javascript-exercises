const reverseString = function(word) {
    let wordReversed = '';
    let wordLettersCount = word.length;
    for (i = wordLettersCount; i > -1; i--) {
        wordReversed = wordReversed + word.charAt(i);
    }
    return wordReversed;
};

//their solution
// const reverseString = function (string) {
//     return string.split("").reverse().join("");
//   };
// creates an array with every single letter as different element, then invert the order, then joins all them together again  
  

// Do not edit below this line
module.exports = reverseString;
