async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10); // 10ms

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Request aborted due to timeout");
    } else {
      console.log("Fetch error:", err.message);
    }
  }
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1");
