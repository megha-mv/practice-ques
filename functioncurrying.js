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

 //
 function sum(a) {
  return function(b) {
    return a + b;
  };
}
console.log(sum(1)(2)); 
console.log(sum(5)(-1)); 

//

function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
console.log(multiply(2)(3)(4)); // Output: 24
console.log(multiply(1)(-1)(1));

//
function add(a) {
  return function(b) {
    if (b !== undefined) {
      return add(a + b);
    } else {
      return a;
    }
  };
}
console.log(add(1)(2)(3)()); // Output: 6
console.log(add(1)(1)(1)(1)(1)());
//

//Filter Array Using Currying
function filterArray(predicate) {
  return function(array) {
    return array.filter(predicate);
  };
}
function isEven(num) {
  return num % 2 === 0;
}
console.log(filterArray(isEven)([1, 2, 3, 4]));