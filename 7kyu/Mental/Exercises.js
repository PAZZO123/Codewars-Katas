function displayNumbers() {
  let count = 1;

  const Id = setInterval(() => {
    console.log(count++);
    //if(count===)
  }, 2000); 

  setTimeout(() => {
    clearInterval(Id);
    console.log("Stopped!");
  }, 5000); 
}

displayNumbers();
