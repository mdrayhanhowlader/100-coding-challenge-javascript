// 7. *Check if a string is a palindrome:* Write a function that checks if a string is a palindrome (reads the same backward as forward).

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar")); // true
