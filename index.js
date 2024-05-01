// Reverse a string:* Write a function that reverses a given string.

// const orginaSTr = "live";

// const makeRivers = (str) => {
//   return str.split("").reverse().join("");
// };

// console.log(makeRivers(orginaSTr));

// Check if a number is even or odd:* Write a function that determines if a number is even or odd

// const num = 11;

// const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };

// const result = evenOrOdd(num);
// console.log(result);

// 3. *Find the factorial of a number:* Write a function that calculates the factorial of a number.

const num = 5;

const factorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

const result = factorial(num);
console.log(result);
