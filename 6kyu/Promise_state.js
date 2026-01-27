function getState(promise) {
  const obj={}
  return Promise.race([promise,obj])
    .then(res=>(res===obj)?'pending':'fulfilled',(err)=>'rejected')
}

//test cases
let P=new Promise(function(resolve, reject){
    let decision=true
    if(decision){
        resolve('Success')
    }
    else{
        reject()
    }
})
console.log(getState(P))