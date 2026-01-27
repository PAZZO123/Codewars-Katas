/*
Imagine you are developing a real-time news application, and you need to fetch posts from three 
different sources to provide users with the latest updates.

The API endpoints for getting posts are:

https://dummyjson.com/posts
https://this-may-not-exist.com/posts
https://jsonplaceholder.typicode.com/posts

To ensure a seamless user experience, you are supposed to create a function called getFastPosts that fetches posts from these endpoints simultaneously (concurrently) and only presents data from the source that responds the quickest, while ignoring slower or potentially unreliable sources.

Example of how the function should be used
*/
// getFastPosts() code here...
function getFastPosts() {
  const urls = [
    "https://dummyjson.com/posts",
    "https://this-may-not-exist.com/posts",
    "https://jsonplaceholder.typicode.com/posts",
  ];

  const fetchPromises = urls.map((url) =>
    fetch(url)
  .then(res=>{
    if(!res.ok)console.log('Something Wrong Happened!')
        return res.json()
  }).catch(err=>new Promise(()=>{}))
  );

  return Promise.race(fetchPromises);
}

getFastPosts()
.then((posts) => {
    console.log(posts)
}).catch(err=>console.log(err))

