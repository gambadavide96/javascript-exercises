
const removeFromArray = function(arrayToManipulate, ...parameters) {

  parameters.forEach(
    (param) => {
      arrayToManipulate = arrayToManipulate.filter(value => value !== param);
    }
  )

  return arrayToManipulate;

};

// Do not edit below this line
module.exports = removeFromArray;
