function doubleNumbers(arr){
  const newArr = arr.map((val)=>val*2);
  return newArr
}

console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr){
  const newSArr = arr.map((val)=>val.toString());
  return newSArr;
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function capitalizeNames(arr){
  return arr.map((val)=>val.toUpperCase());
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

function namesOnly(arr){
  return arr.map((val)=>val.name)
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

function makeStrings(arr){
  const newArr=[];
  arr.forEach(element=>{
    if(element.age>18){
      newArr.push(element.name+`${' can go to The Matrix'}`)
    }else{
      newArr.push(element.name+`${'  can not go to The Matrix'}`)
    }
  })
  return newArr;
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

function readyToPutInTheDOM(arr){
  const newArr=arr.map(val=>`<h1>${val.name}</h1><h2>${val.age}</h2>`)
  return newArr;
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

const names = ['John Doe', 'Alice Smith', 'Bob Johnson'];
const initials = names.map((name) => {
 const [firstName, lastName] = name.split(' ');
 return `${firstName.charAt(0)}${lastName.charAt(0)}`;
});
console.log(initials);
// Output: ['JD', 'AS', 'BJ']

//Format Dates
const dateStrings = ['2023-01-15', '2023-05-20', '2023-09-10'];
const formattedDates = dateStrings.map((dateString) => {
 const date = new Date(dateString);
 return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
});
console.log(formattedDates,'----formatted dates');
// Output: ['1/15/2023', '5/20/2023', '9/10/2023']



//ques-1 Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// output - Output:
// [["ate","eat","tea"],["nat","tan"],["bat"]]

function groupAnagram(input){
  let finalAnagramGroup=[];
  let newGroupAnagram = [];
   input.map((val)=>{
    newGroupAnagram.push(val.split('').sort().join('')) // to check for anagram
  })

  newGroupAnagram.forEach((val)=>{
    let word = input.filter((char)=> val === char.split('').sort().join(''));
    finalAnagramGroup.push(word.sort());
  })

  const resultArray = Array.from(new Set(finalAnagramGroup.map(JSON.stringify)), JSON.parse);

  return resultArray;
}

function groupAnagrams(array) {
  let finalArray = [];

  // rearrange each word to check for anagram
  let rearranged = array.map(element => {
    return [...element].sort().join("");
  });

  // remove duplicates
  let uniqueArray = [...new Set(rearranged)];

  // compare original array with dupliates
  uniqueArray.forEach(word => {
    let chunk = array.filter(char => word === [...char].sort().join(""));

    finalArray.push(chunk.sort());
  });

  return finalArray;
}

function groupAnagramApproachTwo(anagrams) {
  const wordGroups = anagrams.reduce((groups, anagram) => {
    const word = anagram.split('').sort().join('');
    if (groups[word]) {
      groups[word].push(anagram);
    } else {
      groups[word] = [anagram];
    }
    return groups;
  }, {});

  // return Object.values(wordGroups).map(group => group);
  return wordGroups;
}

const input = ["eat", "tan", "tea", "ate", "nat", "bat"];
console.log(groupAnagrams(input),'----another approach for anagram')
console.log('*******--- 1st approach>', groupAnagram(input))
console.log('*******-------2nd approach>',groupAnagramApproachTwo(input))

function groupTogether(input){
  let final=[];
  let ana = input.map((val)=>{
    return val.split('').sort().join("")
  });

  let uniqueAna = new Set([...ana])

  uniqueAna.forEach((val)=>{
    let chunk = input.filter(char => val === char.split('').sort().join(""));  
    final.push(chunk.sort())  
  })
  return final.flat();
}
const input1=["cat", "dog", "tac", "god", "act"];
//output =[cat, tac, act, dog, god]
console.log(groupTogether(input1));

// check if it is palindrome or not - palindrome("madam")
function palindrome(str){
  const reversed = str.split('').reverse().join('');

  if (str == reversed){
    return true;
  }else {
    return false;
  }
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam"));

const newArrForPalindrom = ['madam','level','radar','nice'];
const isPalindromeFunc =(str) =>{
  const reverseStr = str.split('').reverse().join('');
  return reverseStr == str;
}

const isPalindromeResult = newArrForPalindrom.filter((str) => isPalindromeFunc(str));
console.log(isPalindromeResult);

//
const detectiveArray = [1, 2, 3, 5, 6];
const missingNumber = 15 - detectiveArray.reduce((sum, num) => sum + num, 0);
//
/* Given an array as [1, 3, 5,4,6,7,4,9, 8], by mistake there is duplicate number and one is replaced.
Find the duplicate the number and missing number.
Print as below:
Duplicate number: 4
Missing number: 2 */
const array1 = [1, 3, 5,4,6,7,4,9,8]

function duplicate(arr){
	const sum = arr.reduce((acc,val) => acc+val,0);
  let sumOfSeries =0;
  for(let i=0;i<= arr.length;i++){
		sumOfSeries=sumOfSeries+i;
	}
  console.log('missing number ',sum-sumOfSeries);
	const dupNum = arr.filter((val,i) => arr.indexOf(val) !== i);
	console.log('duplicate number',dupNum);
}

duplicate(array1);

function findMissingAndDuplicate(arr) {
  const n = arr.length; 
  const expectedSum = (n * (n + 1)) / 2;
  
  const actualSum = arr.reduce((acc, val) => acc + val, 0);
  
  const numSet = new Set();
  let duplicateNumber;

  // Find the duplicate number
  for (let num of arr) {
    if (numSet.has(num)) {
      duplicateNumber = num;
    } else {
      numSet.add(num);
    }
  }

  // The sum without the duplicate number
  const sumWithoutDuplicate = actualSum - duplicateNumber;
  const missingNumber = expectedSum - sumWithoutDuplicate;

  console.log('Missing number:', missingNumber);
  console.log('Duplicate number:', duplicateNumber);
}

findMissingAndDuplicate(array1);


function findMajorityElement(m, nums) {
  const n = nums.length;

  // Step 1: Count occurrences of m
  let count = 0;
  for (let num of nums) {
      if (num === m) {
          count++;
      }
  }
  
  // Step 2: Check if m is the majority element
  if (count > n / 2) {
      return count;
  } else {
      return -1;
  }
}

// Testing the function
const m1 = 2;
const nums1 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(findMajorityElement(m1, nums1)); // Output: 4

const x = 123['toString'].length + '123';
const y='123'['toString'].length + '123';
const z='123'['toString'].length;
console.log(x,'x---');
console.log(y,'y---');
console.log(typeof z);


const length = 5; // Desired length of the array
const filledArray = Array.from({ length }, (_, index) => index);
console.log(filledArray);

const fillValue = 'default';
const filledArrayNew = new Array(length).fill(fillValue);
console.log(filledArrayNew); 

//

function countOccurrences(string, substring) {
  const regex = new RegExp(substring, 'g');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}
const inputString = "Hello, Hello, Hello, World!";
const searchSubstring = "Hello";
const occurrences = countOccurrences(inputString, searchSubstring);
console.log(`${searchSubstring} appears ${occurrences} times in the string.`);

const arrayRange = (start, stop, step) => {
  if (step === 0) {
    throw new Error("Step cannot be zero");
  }

  const range = [];

  if (step > 0) {
    for (let i = start; i <= stop; i += step) {
      range.push(i);
    }
  } else {
    for (let i = start; i >= stop; i += step) {
      range.push(i);
    }
  }

  return range;
};

console.log(arrayRange(1, 5, 1)); // Output: [1, 2, 3, 4, 5]
console.log(arrayRange(5, 1, -1)); // Output: [5, 4, 3, 2, 1]




function toTitleCase(str) { 

  return str.replace(/\b\w/g, l => l.toUpperCase()); 

} 

console.log(toTitleCase('welcomehere'))

const strP ="abacdabcdabe";

const countCharP = (str) => {
  const strArr = str.split('');
  const counter = strArr.reduce((acc, val)=>{
    if(acc[val]){
      acc[val]++;
    }else{
      acc[val]=1;
    }
    return acc;
  },{});


  const output = Object.keys(counter).map((char) => `${char}${counter[char]}`).join('');
  return output;
}

// console.log(countChar(str));

function charCounterAndJoin(str){

 const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  console.log(charCount,'<<<<');

 const output = Object.keys(charCount).map((char) => `${char}${charCount[char]}`).join('');
 return output;
}

// console.log(charCounterAndJoin(str));

const charArrL =['a','b','a','c','b','a','d'];

function countCharNew(charArr){
  const counter = charArr.reduce((acc, val) =>{
    if(acc[val]){
      acc[val]++;
    }else{
      acc[val]=1;
    }
    return acc;
  },{});

  // return Object.entries(counter);
  const out = Object.keys(counter).map((char) => `${char}${counter[char]}`).join('');
  return out;
}

// console.log(countCharNew(charArr));

function generalCharCounter(str){

  function strCounter(str){
    const counter = str.reduce((acc, val) =>{
      if(acc[val]){
        acc[val]++;
      }else{
        acc[val] =1;
      }
      return acc;
    },{});

    const res = Object.keys(counter).map((char) => `${char}${counter[char]}`).join('');
    return res;
  }

  if(typeof str == 'string'){
    str = str.split('');
    return strCounter(str);
  }else{
    return strCounter(str);
  }
}

console.log(generalCharCounter(charArrL),'-----charArr-----');
console.log(generalCharCounter(strP),'-----str-----');

//There is an array of integers, lets say 3,5,7,9. 
//You are supposed to create another array and populate it such that the second array's 0th position should be a
//product of all numbers from the first array excluding the number at its 0th position,
// meaning it should be 5x7x9(excluding 3), number at the index 1 of the second array will be product of 3x7x9 (excluding 5).

const arrNew = [3,5,7,9];

function productOfSum(arr){
  // const res =arr.map((val) => arr.reduce((acc,val)=>acc*val,1)/val);
  const tempArr = arr.reduce((acc,val) => acc*val,1);
  const res = arr.map((val) =>tempArr/val);
  return res;
}

console.log(productOfSum(arrNew));


const arr = [1, 3, 5,4,6,7,4,9,8]

function duplicate(arr){
	const sum = arr.reduce((acc,val) =>acc+val,0);
  let sumOfSeries =0;
  for(let i=0;i<10;i++){
		sumOfSeries += i;
	}
  console.log('missing number ',sum-sumOfSeries);
	const dupNum = arr.filter((val,i) => arr.indexOf(val) !== i);
	console.log('duplicate number',dupNum);
}

duplicate(arr);


function findDuplicateNames(arr){ 
  const obj={} 
  for(let i=0;i<arr.length;i++){ 
	 const item1 = arr[i].split(" ").join("").toLowerCase(); 
   const item2 = arr[i].split(" ").reverse().join("").toLowerCase();
   if(obj[item1] || obj[item2]){ 
    arr[i]+='--dup'; 
   } 
   else {
   obj[item1]=1; obj[item2]=1; 
   }
  }
  
  return arr;
  } 

const inputNew = ["John Mayor", "Johnny Baba", "Jin kum", "John Cena", "Cena John", "John Cena","john Cena"];
// const duplicateNames = findDuplicateNames(namesArray);
const duplicateNamesNew = findDuplicateNames(inputNew);
console.log(duplicateNamesNew);

//

const str ="abacdabcdabe";

const countChar = (str) => {
  const strArr = str.split('');
  const counter = strArr.reduce((acc, val)=>{
    if(acc[val]){
      acc[val]++;
    }else{
      acc[val]=1;
    }
    return acc;
  },{});


  const output = Object.keys(counter).map((char) => `${char}${counter[char]}`).join('');
  return output;
}

// console.log(countChar(str));

function charCounterAndJoin(str){

 const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  console.log(charCount,'<<<<');

 const output = Object.keys(charCount).map((char) => `${char}${charCount[char]}`).join('');
 return output;
}

// console.log(charCounterAndJoin(str));

const charArr =['a','b','a','c','b','a','d'];

function countCharNew(charArr){
  const counter = charArr.reduce((acc, val) =>{
    if(acc[val]){
      acc[val]++;
    }else{
      acc[val]=1;
    }
    return acc;
  },{});

  // return Object.entries(counter);
  const out = Object.keys(counter).map((char) => `${char}${counter[char]}`).join('');
  return out;
}

// console.log(countCharNew(charArr));

function generalCharCounter(str){

  function strCounter(str){
    const counter = str.reduce((acc, val) =>{
      if(acc[val]){
        acc[val]++;
      }else{
        acc[val] =1;
      }
      return acc;
    },{});

    const res = Object.keys(counter).map((char) => `${char}${counter[char]}`).join('');
    return res;
  }

  if(typeof str == 'string'){
    str = str.split('');
    return strCounter(str);
  }else{
    return strCounter(str);
  }
}

console.log(generalCharCounter(charArr),'-----charArr-----');
console.log(generalCharCounter(str),'-----str-----');

function countCleanSquares(R) {
  const N = R.length;
  const M = R[0].length;
  let visited = Array.from({ length: N }, () => Array(M).fill(false));
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up
  let dirIndex = 0; // start direction: right
  let x = 0, y = 0; // start position
  let cleanedCount = 0;

  while (true) {
    if (!visited[x][y]) {
      visited[x][y] = true;
      cleanedCount++;
    }

    let nextX = x + directions[dirIndex][0];
    let nextY = y + directions[dirIndex][1];

    if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < M && R[nextX][nextY] === '.') {
      x = nextX;
      y = nextY;
    } else {
      dirIndex = (dirIndex + 1) % 4; // rotate clockwise
      nextX = x + directions[dirIndex][0];
      nextY = y + directions[dirIndex][1];

      if (!(nextX >= 0 && nextX < N && nextY >= 0 && nextY < M && R[nextX][nextY] === '.')) {
        break;
      }

      x = nextX;
      y = nextY;
    }
  }

  return cleanedCount;
}

// Example usage
const grid = [
  "....X",
  "...XX",
  "..X..",
  "....."
];

console.log(countCleanSquares(grid)); // Output: Number of clean squares

