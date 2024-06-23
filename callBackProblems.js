// function getData(dataId,getNextData){
//   setTimeout(()=>{
//     console.log(dataId,'  :data');
//     getNextData && getNextData();
//   },2000)
// }

// getData(1,()=>{
//   getData(2,()=>{
//     getData(3,()=>{
//       getData(4)
//     })
//   })
// });

//promises
// const promise = new Promise((resolve, reject)=>{
//   console.log('I am a promise');
//   resolve('sucessful');
// })

// console.log(promise);

// function getUserID(userId){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('userID  :',userId);
//       resolve('successful');
//     },2000)
//   })
// }
// getUserID(1).then((res)=>{console.log(res)});

//promise chaining
function f1(){
  return new Promise((resolve) =>{
      setTimeout(()=>{
          console.log('data1 -----');
          resolve('success')
      },2000)
  })
}
function f2(){
  return new Promise((resolve) =>{
      setTimeout(()=>{
          console.log('data2 ------');
          resolve('success')
      },2000)
  })
}
function f3(){
  return new Promise((resolve) =>{
      setTimeout(()=>{
          console.log('data3 ------');
          resolve('success')
      },2000)
  })
}
f1().then(()=>{
  f2().then(()=>{
      f3().then(()=>{})
  })
});