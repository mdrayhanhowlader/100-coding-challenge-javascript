// Function to calculate the greatest common divisor (GCD) using Euclid's algorithm
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

// Function to calculate the least common multiple (LCM)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Example usage:
console.log(lcm(4, 6)); // Output: 12 (LCM of 4 and 6)
console.log(lcm(10, 15)); // Output: 30 (LCM of 10 and 15)
