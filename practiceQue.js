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
