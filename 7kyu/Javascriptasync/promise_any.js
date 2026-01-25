// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });

// // Any in action 
// Promise.any([myPromise1, myPromise2]).then((results) =>
//    console.log(results)//Queen
   
// );

// const myPromise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 200, "error");
// });

// const myPromise4 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "Error2");
// });

// // check if there is any one that has fulfuled or not
// Promise.any([myPromise3, myPromise4]).then((results) =>
//    console.log(results)
// );//[AggregateError: All promises were rejected] {[errors]: [ 'error', 'Error2' ]}


 let p1=new Promise(function(resolve, reject){
     let decision= false
     if(!decision){
        setTimeout(function(){
            reject('Failure one')
       },2000)
     }
    setTimeout(function(){
             resolve('Success two')
       },2000)
 })
  let p2=new Promise(function(resolve, reject){
     let decision =false
     if(!decision){
         setTimeout(function(){
            reject('Failure two')
       },3000)
     }
    setTimeout(function(){
              resolve('Success two')
       },3000)
 })
  let p3=new Promise(function(resolve, reject){
     let decision =false
     if(!decision){
           setTimeout(function(){
            reject('Failure three')
       },5000)
     }
      setTimeout(function(){
              resolve('Success three')
       },5000)
 })
 Promise.any([p1,p2,p3]).then(
     result=>console.log(result)).catch(err=>console.log(err))