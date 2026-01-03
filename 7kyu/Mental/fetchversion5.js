const payload={
    name:'Patrick',
    date:Date.now(),
    done: false,
    message:"Wait Patiently"
}

function sendData(url,data){
    return fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json',
                  'User-Agent':'Userdefined/V1'
               },
        body:JSON.stringify(data)
    })

}
//function call
sendData('https://jsonplaceholder.typicode.com/todos', payload)
.then(res=>res.json())
.then(res=>console.log('We Received ',res))
.catch(err=>console.log(err.name))