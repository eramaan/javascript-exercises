const convertToCelsius = function(temp) {
  let convertedTempToCel = (temp - 32) * 5/9
  return Math.round(convertedTempToCel * 10) / 10
};

const convertToFahrenheit = function(temp) {
  let convertedTempToFar = (temp * 9/5) + 32
  return Math.round(convertedTempToFar * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
