/*
Implement a timeout for an asynchronous fetch request. If the request takes longer than(5 milliseconds), it should be aborted.

https://jsonplaceholder.typicode.com/users

*/
let controller=new AbortController()
let signal=controller.signal

function fetchData(url){
return fetch(url,{signal})
.then(res=>{
if(!res.ok) throw new Error('Fetch Failed!')
    return res.json()
}).then(data=>console.log(data))
.catch(err=>{
    if(err.name==='AbortError') console.log('The Fetch Was Aborted')
    console.log(err.message)
})
}

fetchData('https://jsonplaceholder.typicode.com/users')
setTimeout(function(){
    controller.abort()
},20)