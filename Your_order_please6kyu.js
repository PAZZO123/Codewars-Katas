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

//test cases
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))//Fo1r the2 g3ood 4of th5e pe6ople