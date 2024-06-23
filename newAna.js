const arr=['john Smith','smith john','John Smith','john cena','John Cena']
//find unique name ['john Smith', 'john cena']

// const findUniName =(arr) =>{
//     const tempObj={};
//     for(let i=0;i<arr.length;i++){
//         const normalisedName = arr[i].split(' ').join('').toLowerCase();
//         const reversedName = arr[i].split(' ').reverse().join('').toLowerCase();
//         if(tempObj[normalisedName] || tempObj[reversedName]){
//           arr[i]+='-dup'; 
//         }else{
//             tempObj[normalisedName]=1;
//             tempObj[reversedName]=1
//         }
       
//     }
//      return arr;
// }

// console.log(findUniName(arr),'-----')

function uniNameMap(arr){
    const map = new Map();
    const res=[];
    arr.forEach((val)=>{
        const normalisedName = val.split(' ').join('').toLowerCase();
        const reversedName = val.split(' ').reverse().join('').toLowerCase();
        if(map.get(normalisedName) || map.get(reversedName)){
          res.push(val+'--dup')  
        }else{
            map.set(normalisedName,1);
            map.set(reversedName,1);
            res.push(val);
        }
    })
    return res;
}

console.log(uniNameMap(arr));

const a=[12, 23, 32, 43, 12, 23, 56, 67, 56, 67];
//program to find unique array
function uniArr(a){
    const newArr = a.filter((val,i)=>a.indexOf(val) ==i);
    console.log('1st way -',newArr);
    const anotherNewArr = a.reduce((acc,val)=>{
        if(!acc.includes(val)) acc.push(val);
        return acc;
    },[]);
    console.log('2nd way -',anotherNewArr)
    return newArr;
}
console.log('uniques values --',uniArr(a))

let str = "abcbadcab"
let sub='bad'
//write a javascript program to check if this sub exists or not
const exists =(str,sub)=>{
    const regex= new RegExp(sub,'i')
    if(str.includes(sub)){
        console.log('substring is present from 2nd way')
    }else{
        console.log('no substring present')
    }
    return regex.test(str);
}
console.log('substring present from 1st way -',exists(str, sub))
//
//anagram
let inputArr1 = ['eat cat', 'act aet', 'rat tea', 'tac tea tar atr'];
//output =[[eat,aet,tea],[cat,act]]
//so output should be to fetch anagaram only and unique

function findUniqueAnagrams(inputArr) {
    const map = new Map();

    // Split each string in the input array into individual words
    inputArr.forEach(str => {
        str.split(' ').forEach(word => {
            // Sort the word to use it as a key
            const sortedWord = word.split('').sort().join('');
            if (!map.has(sortedWord)) {
                map.set(sortedWord, new Set());
            }
            map.get(sortedWord).add(word);
        });
    });

    // Filter out groups that have more than one element
    const result = [];
    map.forEach(group => {
        if (group.size > 1) {
            result.push(Array.from(group));
        }
    });

    return result;
}

// Example usage

let output = findUniqueAnagrams(inputArr1);
console.log(output); // Output: [['eat', 'aet', 'tea'], ['cat', 'act', 'tac']]


//
function findUniqueAnagramsNew(inputArr) {
    const anagramGroups = {};

    // Split each string in the input array into individual words
    inputArr.forEach(str => {
        str.split(' ').forEach(word => {
            // Sort the word to use it as a key
            const sortedWord = word.split('').sort().join('');
            if (!anagramGroups[sortedWord]) {
                anagramGroups[sortedWord] = new Set();
            }
            anagramGroups[sortedWord].add(word);
        });
    });

    // Filter out groups that have more than one element
    const result = Object.values(anagramGroups).filter(group => group.size > 1).map(group => Array.from(group));

    return result;
}

// Example usage;
let outputNew = findUniqueAnagramsNew(inputArr1);
console.log(outputNew,'-----'); 

