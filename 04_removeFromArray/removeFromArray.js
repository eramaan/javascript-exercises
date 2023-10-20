const removeFromArray = function(myArray, ...toBeRemovedArray) {
    let removed = []
    for (let i = 0; i < toBeRemovedArray.length; i++) {   //cicla elementi dell'array da rimuovere 
    
        for (let j = 0; j < myArray.length; j++) { //cicla elementi dell'array di partenza
            if (toBeRemovedArray[i] === myArray[j]) {
                removed = myArray.splice(j,1)
                console.log("removed: " + removed);
                console.log("what's left: " + myArray)
            } else {
            }
        }
    }
return myArray;
};

// aaand again their solution is way easier than mine, next time should really look for some other ways to do stuff than using for loops 
// const removeFromArray = function (array, ...args) {
//     // create a new empty array
//     const newArray = [];
//     // use forEach to go through the array
//     array.forEach((item) => {
//       // push every element into the new array
//       // UNLESS it is included in the function arguments
//       // so we create a new array with every item, except those that should be removed
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
//     // and return that array
//     return newArray;
//   };


// Do not edit below this line
module.exports = removeFromArray;
