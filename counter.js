const arr=['a','b','c','a','e','b','c','f','d','c'];

//output = a2b2c3d1e1f1

function charCounter(arr){
    let obj={};
    arr=arr.sort();
    for(let char of arr){
        if(obj[char]){
            obj[char]++;
        }else{
            obj[char]=1;
        }
    }
    const res = Object.entries(obj).map((val) => `${val[0]}${val[1]}`).join('');
    return res;
}

console.log(charCounter(arr));

