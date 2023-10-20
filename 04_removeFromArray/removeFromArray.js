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

// Do not edit below this line
module.exports = removeFromArray;
