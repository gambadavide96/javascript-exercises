const reverseString = function(stringtoReverse) {

  let result = ''
  const len = stringtoReverse.length

  for (let i = len - 1; i > -1; i--){
    result += stringtoReverse.charAt(i)
  }

  return result


  /* Soluzione compatta:
    const reverseString = function (string) {
      return string.split("").reverse().join("");
    };

   */

};

// Do not edit below this line
module.exports = reverseString;
