function count(string) {
let seen={}
for(let char of string){
  seen[char]=(seen[char]||0)+1
}
return seen 
}

