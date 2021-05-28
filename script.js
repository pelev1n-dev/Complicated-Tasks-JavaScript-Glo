let num = 266219;
let arrNumber = num.toString().split('');
console.log(arrNumber);

let multiDigital = arrNumber[0] * arrNumber[1] * arrNumber[2] * arrNumber[3] * arrNumber[4] * arrNumber[5];
arrNumber.forEach(function (item, i, arrNumber) {
  console.log(item[i] * item[i++])
});
console.log(arrNumber);
console.log(multiDigital);

let multiDigitalPow = multiDigital ** 3
console.log(multiDigitalPow);

console.log(+(multiDigitalPow.toString().substr(0,2)));
