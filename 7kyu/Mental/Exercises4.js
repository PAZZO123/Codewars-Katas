const { XMLHttpRequest } = require("xmlhttprequest");
function fetchToDo(){
    let xhr =new XMLHttpRequest()
    
    xhr.open('GET',"https://jsonplaceholder.typicode.com/todos/1")

    xhr.onprogress=(event)=>{
        console.log('Reached')
         if (event.lengthComputable) {
           console.log(`Received ${event.loaded} of ${event.total} bytes`);
           } else {
               console.log(`Received ${event.loaded} bytes`); // no Content-Length
             }
                }
               
 
    xhr.onload=()=>{
        if(xhr.status>=200 && xhr.status<300){
            console.log(JSON.parse(xhr.responseText))
        }
        else{
            console.log('Server Returned this Status:',xhr.status)
        }
    }
    xhr.onerror=()=>{
        console.log("Network Error happened!")
    }
  
    xhr.send()
}
fetchToDo();

