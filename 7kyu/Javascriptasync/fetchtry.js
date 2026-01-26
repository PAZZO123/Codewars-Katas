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
const url='https://jsonplaceholder.typicode.com/users/10'
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => {
//     if (!res.ok) throw new Error('Unable to fetch')
    
//     console.log(res.status)
//     return res.json()
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message))

//3. async and await 
async function getData(url){
    let res=await fetch(url)
    let jsonValue=await res.json()
    console.log(jsonValue)
}
getData(url).catch(err=>console.warn((err.message).toUpperCase()))