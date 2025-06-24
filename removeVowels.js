const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i]; 
    
    if (!vowels.includes(char)) {
      newStr += char; 
    }
  }
  
  return newStr;
};
console.log(disemvowel("Hello world"))
