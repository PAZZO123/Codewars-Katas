// async function fetchData(){
//     try{
//         let data=await fetch('https://dummyurl')
//     let jasonValue=data.json()
//     console.log(data)
//     }
//     catch(err){
//         console.error(err.message)
//     }
// }
// fetchData()

//2. fetching


// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => {
//     if (!res.ok) throw new Error('Unable to fetch')
    
//     console.log(res.status)
//     return res.json()
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message))

//3. async and await 
 const url='https://jsonplaceholder.typicode.com/users/1'

// async function getData(url){
//     let res=await fetch(url)
//     let jsonValue=await res.json()
//     console.log(jsonValue)
// }
// getData(url).catch(err=>console.warn((err.message).toUpperCase()))

//4.url Request

//let url ='http://127.0.0.1:5500/local-sample.json?attempt=123&other=hello'


// function fetchData(url){
//     let str=new URL(url)
//     //console.log(str.host, str.origin, str.protocol, str.hostname, str.pathname)
//     //fetch(str).then(res=>console.log(res.status))
//     const request=new Request(str,{
//         headers:{'x-steve':'hello'},
//         method:'GET',
//         cache:'no-store'
//     })
//     fetch(request)
//     .then(res=>{
//         if(!res.ok) throw new Error("Invalid Request")
//             console.log(res.status)
//             return res.json()
//     })
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err.message))
// }
// fetchData(url)

//5. Response

let obj={
    id:crypto.randomUUID(),
    name:'the one who knocks',
    favColor:'Blue'

}
// const imagestr='http://picsum.photos/id/237/300/200';
// function getData(){
//     let jsonValue=JSON.stringify(obj)
//     //console.log(jsonValue)
//     let file=new File([jsonValue],'mydata.json',{type:'application/json'});
//     let response= new Response(file,{
//         status:200,
//         statusText:'say my name',
//         headers:{
//             'content-type': 'application/json',
//             'content-length':file.size
//         },
//     })
//     //console.log(response.headers.get('content-type'))
//     fetch(imagestr)
//     .then(res=>{
//         if(!res.ok) throw new Error('Invalid')
//             console.log(res.status)
//         return res.blob()
//     })
//     .then(blob=>{console.log(blob)
//     let url=URL.createObjectURL(blob)
//     let img=document.getElementById('img')
//     img.src=url})
// }
// getData()
//blob binary large object research then

//6. generator


// const imagestr='http://picsum.photos/id/237/300/200';
// function getData(){
//     let jsonValue=JSON.stringify(obj)
//     //console.log(jsonValue)
//     let file=new File([jsonValue],'mydata.json',{type:'application/json'});
//     let response= new Response(file,{
//         status:200,
//         statusText:'say my name',
//         headers:{
//             'content-type': 'application/json',
//             'content-length':file.size
//         },
//     })
//     //console.log(response.headers.get('content-type'))
//     fetch(imagestr)
//     .then(res=>{
//         if(!res.ok) throw new Error('Invalid')
//             console.log(res.status)
//         return res.blob()
//     })
//     .then(blob=>{console.log(blob)
//     let url=URL.createObjectURL(blob)
//     console.log(url)
//     let img=document.getElementById('img')
//     img.src=url})
// }
// getData()

//7 . autho

function getData(url){
let urls=new URL(url)
let sp=urls.searchParams
sp.append('hello','Word')
sp.append('api-key','ddshfadhieuhreuoirhyowrtuoew')

let request=new Request(urls,{

})
}