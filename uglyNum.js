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


const uglyNumAnother = (num) => {
  if (num <= 0) return false;

  const primeFactors = [2, 3, 5];

  while (primeFactors.some((factor) => num % factor === 0)) {
    num = primeFactors.reduce((val, factor) => {
      if (num % factor === 0) return val / factor;
      return val;
    }, num);
  }

  return num === 1;
};

console.log(uglyNumAnother(14)); // Output: false
console.log(uglyNumAnother(6)); // Output: true
console.log(uglyNumAnother(1)); // Output: true
console.log(uglyNumAnother(0)); // Output: false

//
function uglyNumComp(num) {
  if (num <= 0) return false;

  const primeFactors = [2, 3, 5];

  for (let i = 0; i < primeFactors.length; i++) {
    while (num % primeFactors[i] === 0) {
      num /= primeFactors[i];
    }
  }

  return num === 1;
}

console.log(uglyNumComp(14)); // Output: false
console.log(uglyNumComp(6)); // Output: true
console.log(uglyNumComp(1)); // Output: true
console.log(uglyNumComp(0)); // Output: false