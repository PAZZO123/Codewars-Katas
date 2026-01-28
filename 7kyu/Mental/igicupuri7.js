/*
Write a function usersAddresses that fetches users from this endpoint https://jsonplaceholder.typicode.com/users and 
returns just the addresses of the first 3 users.
// The output should look like this
[
  {
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    }
  },
  {
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: [Object]
    }
  },
  {
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: [Object]
    }
  }
]
*/
function getAdress(){
   return  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
        if(!res.ok) throw new Error("Fetch Can't Work!")
            return res.json()
    })
    .then(users=>{
        return users.slice(0,3).map(user=>({address:user.address}))

    //     let Arr=[]
    //  for(let r of res){
    //     //console.log()
    //  Arr.push({address:r.address})
    //  }
    // console.log(Arr.slice(0,3))
    })
}
getAdress().then(res=>console.log(res))