let num = 266219;

let arrNumber = num.toString().split('');
console.log(arrNumber);

let multiDigital = 1;
arrNumber.forEach(function (init){
  multiDigital *= init;
});
console.log(multiDigital);

let multiDigitalPow = multiDigital ** 3
console.log(multiDigitalPow);

console.log(+(multiDigitalPow.toString().substr(0,2)));

