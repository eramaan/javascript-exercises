const fibonacci = function(nth) {

    let fibonacciCalc = 0
    let startA = 1;
    let startB = 2;
    
    if (nth == 1 || nth == 2 ) {
      fibonacciCalc = startA
    } else if (nth == 3 ) {
      fibonacciCalc = startB;
    } else if (nth >= 4) {
      for (i = 3; i < nth; i++) {
        fibonacciCalc = startA + startB;
        startA = startB;
        startB = fibonacciCalc;
      };
    } else if (nth <=0) {
      fibonacciCalc = "OOPS";
    }
    return fibonacciCalc;
}

// Do not edit below this line
module.exports = fibonacci;
