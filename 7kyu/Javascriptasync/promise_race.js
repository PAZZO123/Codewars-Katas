// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "success");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "Error2");
// });

// // race 
// Promise.race([myPromise1, myPromise2])
//   .then(result => console.log("Resolved:", result))
//   .catch(error => console.log("Rejected:", error));//->Rejected Error2

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
 Promise.race([p1,p2,p3]).then(
     result=>console.log(result)).catch(err=>console.log(err))