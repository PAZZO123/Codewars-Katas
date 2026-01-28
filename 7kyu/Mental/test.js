async function fetchDataWithRetry(url, maxRetries) {
 
 for(let retry=1;retry<= maxRetries;retry++){
  try{
      let response=await fetch(url)
    if(!response.ok) console.log(`Server did this`)
        let data=response.json()
        return data
   
  }catch(err)
  {
     console.log(`Attempt ${retry}/${maxRetries} failed`);
        if (retry === maxRetries) {
        throw err; 
      }
  }
console.log('Retrying...')
 }
}

// Usage example:
//const apiUrl = 'https://jsonplaceholder.typicode.com/posts3';
const apiUrl = 'https://jsonplaceholder.typicotde.com/posts';
console.log("URL-> ",apiUrl);
const maxRetries = 3;

fetchDataWithRetry(apiUrl, maxRetries)
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
