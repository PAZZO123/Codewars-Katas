function fetchToDo() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Success:", JSON.parse(xhr.responseText));
    } else {
      console.log("Server error:", xhr.status);
    }
  };

  xhr.onerror = () => {
    console.log("Network error occurred");
  };

  xhr.send();
}

fetchToDo();
