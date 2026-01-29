async function fetchWithTimeout(url) {
  const controller = new AbortController();
    const signal=controller.signal
  const timer = setTimeout(() => controller.abort(), 10000); 
  console.log(signal.aborted)//always false
 
  try {
    const res = await fetch(url, { signal });
    clearTimeout(timer);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Request aborted by AbortController");
    } else {
      console.log("Fetch error:", err.message);
    }
  }
    console.log(signal.aborted)//true if aborted 
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1");
