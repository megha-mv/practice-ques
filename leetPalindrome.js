//Palindrome Pairs
//Input: words = ["abcd","dcba","lls","s","sssll"]
//Output: [[0,1],[1,0],[3,2],[2,4]]
//Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]

// function isPalindrome(word) {
//   let left = 0;
//   let right = word.length - 1;
//   while (left < right) {
//     if (word[left] !== word[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }


function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

function palindromePairs(words) {
  const wordMap = new Map();
  const results = [];

  // Create a map of words to their indices
  words.forEach((word, index) => {
      wordMap.set(word, index);
  });

  // Iterate through each word
  words.forEach((word, i) => {
      const n = word.length;
      
      // Split the word into prefix and suffix at all possible positions
      for (let j = 0; j <= n; j++) {
          const prefix = word.substring(0, j);
          const suffix = word.substring(j);

          // If prefix is a palindrome, check if the reverse of suffix exists in the map
          if (isPalindrome(prefix)) {
              const reversedSuffix = suffix.split('').reverse().join('');
              if (wordMap.has(reversedSuffix) && wordMap.get(reversedSuffix) !== i) {
                  results.push([wordMap.get(reversedSuffix), i]);
              }
          }

          // If suffix is a palindrome, check if the reverse of prefix exists in the map
          // Avoid duplicates by ensuring j is not 0 (to avoid checking the entire word twice)
          if (j !== n && isPalindrome(suffix)) {
              const reversedPrefix = prefix.split('').reverse().join('');
              if (wordMap.has(reversedPrefix) && wordMap.get(reversedPrefix) !== i) {
                  results.push([i, wordMap.get(reversedPrefix)]);
              }
          }
      }
  });

  return results;
}

// Test the function with the example input
const words = ["abcd", "dcba", "lls", "s", "sssll"];
const words2 =["bat","tab","cat"]
const result = palindromePairs(words2);
console.log(result); // Output: [[0,1],[1,0],[3,2],[2,4]]


//
var palindromePairsNew = function(words) {
  let arr=[];
  for(let i=0;i<words.length;i++){
      for(j=0;j<words.length;j++){
          if(i!=j){
              let strSum=words[i]+words[j];
              let strSum1=words[j]+words[i];
              if(strSum===strSum.split('').reverse().join('') && !arr.includes(i+'_'+j)){
                  arr.push(i+'_'+j)
              }
              else if(strSum1===strSum1.split('').reverse().join('') && !arr.includes(j+'_'+i))
              {
              arr.push(j+'_'+i)
                
              }
          }
      }
  }
  return arr.map(x=> x.split('_').map(y=> parseInt(y)))
};

const resultNew = palindromePairsNew(words);
console.log(resultNew);
