var sumOfMultiples = function(n) {

  const arrRange =(start,stop,step)=> Array.from({length: Math.ceil((stop-start)/step)},(_,index) => start+index*step);
  const allArr = arrRange(1,n+1,1);
  const x =allArr.reduce((acc,val)=>{
      if(val%3 ===0 || val%5 ===0 || val%7 ===0){
        acc.push(val)
      };
      return acc;
  },[])
  const res = x.reduce((acc,val)=>{
      acc=acc+val
     return acc; 
  },0)
  return res;
}

console.log(sumOfMultiples(10),'------');

//
function TwoSumProblem(arr, target) {
  const map = new Map();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      result.push([map.get(complement), i]);
    }
    map.set(arr[i], i);
  }
  return result;
}

const arr1 = [2, 9, 11, 15, 7, 0];
const target = 9;
console.log(TwoSumProblem(arr1, target));

//

const a1 = [3, 7, 1, 9, 5];
const smallLargest =(arr) =>{
  const small = Math.min(...arr);
  const large = Math.max(...arr);
  return [small,large]
}

console.log('----> ',smallLargest(a1));

//
const arrVal = [1,2,1,3,2,1,4,5,3,5,4,8,9];

function dupVal(arrVal){
  const dups = arrVal.reduce((acc,val) =>{
    acc.set(val,(acc.get(val) ||0)+1)
    return acc;
  }, new Map());

  return arrVal.filter((val)=>dups.get(val) <= 1);
}
console.log(dupVal((arrVal)));
console.log(new Set(arrVal));