const fibonacci = function(pos) {
  if (typeof pos == 'string')
    pos = parseInt(pos);

  if(pos < 0)
    return 'OOPS';

  if(pos == 0)
    return 0;

  let prev2 = 0; //posizione 0
  let prev1 = 1; //posizione 1
  for(let i = 1; i < pos; i++){
    let tail = prev1 + prev2;
    prev2 = prev1
    prev1 = tail
  }

  return prev1;

};

// Do not edit below this line
module.exports = fibonacci;
