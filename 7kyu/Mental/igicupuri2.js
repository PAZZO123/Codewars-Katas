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
async function getFastPosts() {
  const urls = [
    "https://dummyjson.com/posts",
    "https://this-may-not-exist.com/posts",
    "https://jsonplaceholder.typicode.com/posts"
  ];

  const request=urls.map(url=>{
    return fetch(url).then(res=>{
        if(!res.ok) throw new Error('Fetch Failed!')
            return res.json()
    })
  })
  // Promise.race returns the first fulfilled promise
  return Promise.any(request);
}


getFastPosts()
.then((posts) => {
    console.log(posts)
}).catch(err=>console.log(err))

