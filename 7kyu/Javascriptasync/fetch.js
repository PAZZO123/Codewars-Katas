fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
