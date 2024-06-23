const A = [2, 1, 2];

const majrElem = (arr) =>{
  const n = Math.floor(arr.length/2);
  const counter = arr.reduce((acc,val) =>{
    if(acc[val]){
      acc[val]++
    }else{
      acc[val]=1
    }
    return acc;
  },{})

  let res;
  for (const key in counter) {
    if (counter[key] > n) {
      res = parseInt(key);
      break;
    }
  }

  if (!res) {
    res = -1;
  }

  return res;
}

console.log(majrElem(A));