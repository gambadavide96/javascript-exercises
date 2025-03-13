
const roundOneDecimal = (num) => {
  return Math.round(num * 10) / 10
};

const convertToCelsius = function(tempInFahrenheit) {

  let tempInCelsius = (tempInFahrenheit - 32) * 5/9
  tempInCelsius = roundOneDecimal(tempInCelsius)
  return tempInCelsius
};

const convertToFahrenheit = function(tempInCelsius) {

  let tempInFahrenheit = (tempInCelsius * 9/5) + 32
  tempInFahrenheit = roundOneDecimal(tempInFahrenheit)
  return tempInFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
