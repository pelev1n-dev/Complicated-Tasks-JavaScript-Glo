'use strict'

let arr = [3223, 212317, 75355, 355104, 43457, 73228, 37743];

arr.forEach(em => {
  if (String(em).search(/(3|7)/) === 0) console.log(em);
});


let isSimpleCheck = function(number) {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

let isSimple = function(n) {
  for (let i = 2; i <=n; i++) {
    if (isSimpleCheck(i)) {
      console.log(i + ' Делители этого числа: 1 и ' + i);
    }
  }
};

isSimple(100);