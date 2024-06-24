//first missing positive number
//input=[3,4,-1,1]
//output=2
// range - 1 to n+1 and -ve numbers, 0 and >n numbers are of no use

const rangeArr = (start, stop, step) => Array.from({length: Math.ceil((stop-start)/step)},
(_,index) =>start+index*step
);

function missingPosNum(arr,n){
  // filter positive number first
  const posNumArr = arr.filter((val) => val>=1);
  //create a complete arr
  const completeArr = rangeArr(1,n+1,1);
  //filter missing value
  const res = completeArr.filter((val) => !posNumArr.includes(val))
  return res[0];
}

let arr=[3,4,-1,1,0,-2,6]
let n =6;
console.log(missingPosNum(arr,n));

//

function firstMissingPositive(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

// Example usage
console.log(firstMissingPositive(arr)); // Output: 2
