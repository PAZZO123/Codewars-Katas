// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });

// // Settle All
// Promise.all([myPromise1, myPromise2]).then((results) =>
//    console.log(results)//->[ 'King', 'Queen' ]
// );
 let p1=new Promise(function(resolve, reject){
     let decision =true
     if(!decision){
         reject('Failure one')
     }
     resolve('Success one')
 })
  let p2=new Promise(function(resolve, reject){
     let decision =false
     if(!decision){
         reject('Failure two')
     }
     resolve('Success two')
 })
  let p3=new Promise(function(resolve, reject){
     let decision =true
     if(!decision){
         reject('Failure three')
     }
     resolve('Success three')
 })
 Promise.all([p1,p2,p3]).then(
     result=>console.log(result)).catch(err=>console.log(err))