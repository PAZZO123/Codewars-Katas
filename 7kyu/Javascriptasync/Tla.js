

// Yes! Works in ES modules
const data = await Promise.resolve("Hello World").then(res => console.log(res));
