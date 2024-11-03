const numbers = [10, 13, 20, 25, 38, 35, 40];

const numbersEqualOrGreaterThan25 = numbers.filter(function (number) {
  return number >= 25;
});
console.log(numbersEqualOrGreaterThan25);

const numbersDivisibleBy5 = numbers.filter(function (num) {
  return num % 5 === 0;
});

console.log(numbersDivisibleBy5);

const squares = numbers.map(function (numb) {
  return numb ** 2;
});
console.log(squares);

const multi = numbers.map(function (numbere) {
  return numbere * 2;
});
console.log(multi);

const numbersGreaterOrEqual20 = numbers.filter(function (nmbr) {
  return nmbr >= 20;
});
console.log(numbersGreaterOrEqual20);
const square = numbersGreaterOrEqual20.map(function (nmbr) {
  return nmbr ** 2;
});
console.log(square);

const combine = numbersDivisibleBy5.map(function (nombre) {
  return nombre * 3;
});
console.log(combine);
