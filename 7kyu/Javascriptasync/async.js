let promise=new Promise(function(resolve , reject){
    setTimeout(resolve,3000,"Hello Javascript Promise")
})
let promise2=new Promise(function(resolve , reject){
    setTimeout(resolve,10000,"Hello Javascript Promise 2")
})

async function p(){
    console.log("Hello I don't have to wait hhh")
    let await1= await promise;
    console.log("Run Before the promise")
    console.log(await1)
    console.log("Run After the promise")
    let await2= await promise2;
    console.log(await2)
}
p();
