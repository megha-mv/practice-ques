function isUgly(n) {
  if (n <= 0) return false;
  
  const factors = [2, 3, 5];
  for (let factor of factors) {
      while (n % factor === 0) {
          n /= factor;
      }
  }
  
  return n === 1;
}

// Test cases
console.log(isUgly(6));    // true (6 = 2 * 3)
console.log(isUgly(8));    // true (8 = 2 * 2 * 2)
console.log(isUgly(14));   // false (14 has prime factors 2 and 7)
console.log(isUgly(1)); 