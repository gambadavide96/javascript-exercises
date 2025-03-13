const sumAll = function(first, last) {

  if( !(Number.isInteger(first) && Number.isInteger(last)) || (first || last) < 0)
    return "ERROR"

  if (first > last)
  [first, last] = [last, first]

  let sum = 0
  for(let i = first; i <= last; i++){
    sum += i
  }

  return sum


};


// Do not edit below this line
module.exports = sumAll;
