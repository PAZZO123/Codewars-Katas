//use template literals
//use slice method to slice each portion you need 
//for every slice join by empty string use join()

const createPhoneNumber=(n)=>`(${n.slice(0,3).join('')}) ${n.slice(3,6).join('')}-${n.slice(6).join('')}` 

//test cases
console.log(createPhoneNumber([0,7,8,1,4,8,4,4,0,7]))//(078) 148-4407