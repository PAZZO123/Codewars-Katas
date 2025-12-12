function displayNumbers() {
  let count = 1;

  const intervalId = setInterval(() => {
    console.log(count++);
  }, 2000); // every 2 seconds

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped!");
  }, 5000); // stop after 5 seconds
}

displayNumbers();
