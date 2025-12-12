async function fetchWithRetry(url, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Bad response");
      const data = await res.json();
      console.log("Success:", data);
      return data;
    } catch (err) {
      if (attempt < retries) {
        console.log("Retrying...");
      } else {
        console.log("Failed after retries:", err.message);
      }
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
