const {XMLHttpRequest}= require("xmlhttprequest");
const payload={
    name:'Dumy Object',
    content:"Time for sending JSON",
    id:crypto.randomUUID()
}


function fetchTodo(url){
    let xhr=new XMLHttpRequest()
      xhr.open('POST',url)
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.setRequestHeader('User-Agent','user-data')
  
  
    xhr.onload=()=>{
        if(xhr.status<300 && xhr.status>=200){
           let parsed=JSON.parse(xhr.responseText)
            console.log(parsed)
        }else{
            console.log('Server Returned this Status',xhr.status)
        }
    }
    xhr.onerror=()=>{
        console.log('Network Failed ')
    }

    xhr.send(JSON.stringify(payload))
}

fetchTodo('https://jsonplaceholder.typicode.com/todos')