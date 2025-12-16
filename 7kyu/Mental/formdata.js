const { XMLHttpRequest } = require("xmlhttprequest");

function sendData() {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://httpbin.org/post");

  // Set headers
  xhr.setRequestHeader("Content-Type", "application/json");

  // Track download progress (NOT upload)
  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      console.log(`Downloaded ${event.loaded} of ${event.total} bytes`);
    } else {
      console.log(`Downloaded ${event.loaded} bytes`);
    }
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("✅ Server Response:");
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("❌ Request failed:", xhr.status);
    }
  };

  xhr.onerror = function () {
    console.log("❌ Network error");
  };

  const payload = JSON.stringify({
    message: "Hello from Node.js XHR",
    timestamp: Date.now()
  });

  xhr.send(payload);
}

sendData();
