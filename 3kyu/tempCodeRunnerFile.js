fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if (!res.ok) throw new Error('Unable to fetch')
    
    console.log(res.status)
    return res.json()
  })
  .then(data => console.log(data))
  .catch(err => console.log(err.message))