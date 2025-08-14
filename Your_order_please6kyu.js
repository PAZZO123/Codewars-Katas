function order(words){
  let Arr=words.split(' ')
  const result=[]
for(let i=1;i<=Arr.length;i++){
  for(let word of Arr){
    if(word.split('').includes(String(i))){
      result.push(word)
    }
  }
}
  return result.join(' ')
}
