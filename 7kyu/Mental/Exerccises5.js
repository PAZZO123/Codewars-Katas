
const { XMLHttpRequest } = require("xmlhttprequest");
function fetchToDoWithHeaders() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/todos");

  xhr.setRequestHeader("User-Agent", "MyCustomAgent/1.0");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = () => {
      console.log("Response Headers:");
  console.log(xhr.getResponseHeader('Content-Type'));
    if (xhr.status >= 200 && xhr.status < 300) {
      const parsed = JSON.parse(xhr.responseText);
      console.log("Parsed Response:", parsed);
    } else {
      console.log("Server returned status:", xhr.status);
    }
  };
 console.log(xhr.getAllResponseHeaders())
  xhr.onerror = () => {
    console.log("Network error");
  };

  const payload = {
    message: "Hello from client",
    timestamp: Date.now()
  };

  xhr.send(JSON.stringify(payload));
}

fetchToDoWithHeaders();
