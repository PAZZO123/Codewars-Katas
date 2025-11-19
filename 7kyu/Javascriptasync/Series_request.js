let promise =new Promise(function(resolve, reject){
    let truth=true
    if(truth){
        resolve("Truth still exist no more lies 👌")
    }
    else {
        reject("I know you are lying but it okay 😁😁")
        //throw Error("Full of Lies!")
    }
})
promise.then(res=>res)
.then(res=>"I realy know that the "+ res)
.then(res=>console.log(res))
.catch(err=>console.log(err))