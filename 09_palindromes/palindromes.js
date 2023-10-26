const palindromes = function (text) {

    let newText = ""

    // edit string to remove punctuation, spaces and uppercase
    function removePunctuation(text) {
        let punctuation = /[\.,?! ]/g;
        newText = text.replace(punctuation, "").toLowerCase();
   }
    
    removePunctuation(text)

    let newTextReversed = newText.split("").reverse().join("");

    if (newText === newTextReversed) {
        return true
    } else {
        return false
    }
    
};

// Do not edit below this line
module.exports = palindromes;
