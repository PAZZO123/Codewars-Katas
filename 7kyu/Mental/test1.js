async function fetchDataWithTimeout(url, timeout) {
  const controller=new AbortController()
  const signal=controller.signal
  setTimeout(function(){
    controller.abort()
  },timeout)
  try{
    let res=await fetch(url,{signal})
  if(!res.ok) console.log('Something!')
  return res.json()
  } catch(err){
    if(err.name==='AbortError') throw new Error("The Fetch was aborted so unable")
    else throw err
  }
  
}
// Usage example:
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const timeoutMs = 5000;  
//const timeoutMs = 50;  
console.log("Timeout milliseconds: "+timeoutMs)

fetchDataWithTimeout(url, timeoutMs)
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });