// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });

// // Settle All
// Promise.allSettled([myPromise1, myPromise2]).then((results) =>
//     //test
//    console.log(results)//->[ { status: 'fulfilled', value: 'King' },{ status: 'fulfilled', value: 'Queen' }]
// );
 let p1=new Promise(function(resolve, reject){
     let decision =true
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
     let decision =true
     if(!decision){
           setTimeout(function(){
            reject('Failure three')
       },5000)
     }
      setTimeout(function(){
              resolve('Success three')
       },5000)
 })
 Promise.allSettled([p1,p2,p3]).then(
     result=>console.log(result.map(n=>n.value||n.reason))).catch(err=>console.log(err))
