 //const { XMLHttpRequest } = require("xmlhttprequest");
 const url='https://jsonplaceholder.typicode.com/users/1'
let p =document.getElementById('myP')
  
 function sendData(){
           let xhr=new XMLHttpRequest()
        xhr.open('GET',`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random()*6)+1}`)
 xhr.onreadystatechange=()=>{
    if(xhr.readyState===4 && xhr.status===200){
        console.log('Operation Completed')
        console.log(xhr.response)
        p.innerHTML=xhr.response
    }
 }
        xhr.send()
 }
