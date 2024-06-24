function ad(str = '') {
  function curried(nextStr = '') {
    if (nextStr) {
      return ad(str + nextStr);
    } else {
      return ad(str + 'o');
    }
  }

  curried.toString = function() {
    return str;
  };

  return curried;
}

// Test cases
console.log(ad('be').toString()); // Output: "adbe"
console.log(ad()('be').toString()); // Output: "adobe"
console.log(ad()()('be').toString()); // Output: "adoobe"
console.log(ad('be')()('cd')().toString()); // Output: "adbeocdo"
console.log(ad()()()('x').toString());


//
function add (num1) {
  return function (num2) {
   if (num2) {
    return add(num1 + num2);
   }
   return num1;
   }
}
  const result = add(5)(6)();
  const res1 = add(5);
  const res2 = add(5)(-1)(2);
  console. log(result);
  console.log(res1()); // Output: 5
  console.log(res2()); // Output: 6