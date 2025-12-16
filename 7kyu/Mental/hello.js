const {XMLHttpRequest}=require('xmlhttprequest')
const xhr = new XMLHttpRequest();
xhr.open("POST", "/submit");

const formData = new FormData();
formData.append("name", "Patrick");
formData.append("country", "Rwanda");

xhr.onload = () => {
  console.log("Response:", xhr.responseText);
};

xhr.send(formData);
