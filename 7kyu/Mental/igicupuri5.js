const {XMLHttpRequest}=require('xmlhttprequest')
/*
Create a function called myFetch that should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves with the request’s response and rejects with an error if any.
function myFetch(){
    //... your code here
}

myFetch('<https://jsonplaceholder.typicode.com/users>')
.then(data => console.log(data))
.catch(error => console.log('Error:', error))
*/

function myFetch(url){
    return new Promise(function(resolve,reject){
    let xhr=new XMLHttpRequest()
    xhr.open('GET',url)
  xhr.onload=()=>{
      if(xhr.status>=200 && xhr.status<300){
        //console.log(xhr.response)
        let data =JSON.parse( xhr.responseText)
        resolve(data)
    }
    else{
    reject('Something went wrong '+xhr.status)
    }
  }
  xhr.onerror=()=>{
    reject('Network Went Off')
  }
  xhr.send()
  });
}

myFetch('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log('Error:', error))
