const sumAll = function(numA, numB) {
    // check if positive integer
    if (
        numA <= 0 || 
        numB <= 0 || 
        Number.isInteger(numA) == false || 
        Number.isInteger(numB) == false
        ) {
        // if no, throw an error
        return "ERROR";
        // if yes, go on
    } else { 
        let min = 0;
        let max = 0;
        let sum = 0;
        // check which one is the bigger number
        // assign bigger number as the max, the other one as min
        if (numB > numA) {
            min = numA;
            max = numB;
        } else {
            min = numB;
            max = numA;
        }
        // cycle every number and add it to the sum
        for (i = min; i <= max; i++) {
            sum = sum + i;
        }
       
        return sum
    }


};

// Do not edit below this line
module.exports = sumAll;
