let Vowels={a:1,e:2,i:3,o:4,u:5}
function encode(string) {
  let arr=string.split('')
  for(let i=0 ; i<arr.length;i++){
   if(arr[i] in Vowels){
     arr[i]=Vowels[arr[i]]
  }
}
  
  return arr.join('')
}

function decode(string) {
   let arr=string.split('')
   for(let i=0 ; i<arr.length;i++){
    if(Object.values(Vowels).includes(Number(arr[i]))){
    
     arr[i]=Object.keys(Vowels).find(key => Vowels[key] === Number(arr[i]))
  }
}
  
  return arr.join('')
}