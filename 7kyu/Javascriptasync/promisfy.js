function fetchData(url){
    return fetch(url)
}
fetchData("Https://google.com")
.then(res=>{
    console.log('Trying...')
    return res.json()})
.catch(err=>fetchData("Https://google.com"))
.then(res=>{
    console.log('Retrying....')
    return res
}).catch(err=>console.log('Errrrrr'))
