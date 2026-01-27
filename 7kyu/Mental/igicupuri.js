/*Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently from the 
provided API endpoints and combine them based on the userId. The function should return a promise that resolves with
 the combined data.

- Users endpoints https://jsonplaceholder.typicode.com/users
- Todos endpoints https://jsonplaceholder.typicode.com/todos

The returned promise should resolve into an array of users, where each user object has a new key todos. This key shoul
// User object may look like
{
    id: 10,
  name: 'Clementina DuBuque',
  ...
}

// Todo object may look like
{
    userId: 5,
  completed: false,
    ...
}

// The result array will have objects that look like

{
    id: 10,
  name: 'Clementina DuBuque',
  todos: [
        {
            userId: 10,
          completed: false,
            ...
        },
        {
            userId: 10,
          completed: false,
            ...
        }
    ]
    ...
}*/
async function fetchUserTodos(){
let responses= await Promise.all([fetch('https://jsonplaceholder.typicode.com/users'),fetch('https://jsonplaceholder.typicode.com/todos')])
 const data = await Promise.all(
    responses.map(res => res.json())
  );

 const [users,todos]=data
 console.log(todos.length)

//console.log(users[0].id)
for (let i = 0; i < users.length; i++) {
    users[i].todos = []; 

    for (let j = 0; j < todos.length; j++) {
      if (users[i].id === todos[j].userId) {
       // console.log(todos[j])
        users[i].todos.push(todos[j]);
      }
    }
  }
console.log(users)
}

fetchUserTodos()