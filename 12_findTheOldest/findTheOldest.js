const findTheOldest = function(people) {

    let oldest = [...people].sort(function(a, b) {
      let lastGuy = (a.yearOfDeath || new Date().getFullYear())- a.yearOfBirth;
      let nextGuy = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
      return lastGuy > nextGuy ? -1 : 1;
    });
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
