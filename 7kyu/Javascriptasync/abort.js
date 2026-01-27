let controller=new AbortController();
let signal =controller.signal


function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1',{signal})
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>{
        if(err.name==='AbortError'){ console.log('Signal was Immediately aborted')}
        else{console.log(err.message)}
    })
}
getData()
setTimeout(function(){
    controller.abort()
},2000)