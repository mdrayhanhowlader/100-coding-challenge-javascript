// 5. *Find the greatest common divisor (GCD) of two numbers:* Write a function that calculates the GCD of two numbers.

// function gcd(num1, num2) {
//   for (var i = Math.min(num1, num2); i > 0; i--) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       return i;
//     }
//   }
// }

// console.log(gcd(12, 16));

const gcdNumber = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdNumber(b, a % b);
};

console.log(gcdNumber(24, 36));
