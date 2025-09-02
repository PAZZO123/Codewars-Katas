function count(string) {
let seen={}
for(let char of string){
  seen[char]=(seen[char]||0)+1
}
return seen 
}

//second way
function counts(str) {  
   return (m = {}, str.split('').forEach((c) => m[c] = (m[c] || 0) + 1), m);
}
//test cases
console.log(count('patrick'))