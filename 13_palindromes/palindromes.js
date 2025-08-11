const palindromes = function (str) {
  // espr. regolare, sostituisce con niente tutti i caratteri che non sono lettere o numeri
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const n = str.length;
  for(let i = 0; i < Math.floor(n / 2) ; i++) {
    if(str[i] !== str[n - 1 - i])
      return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
