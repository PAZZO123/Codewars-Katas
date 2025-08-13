function duplicateEncode(word){
  let words=word.toLowerCase().split('')
  const duplicate=words.filter((el,i)=>words.indexOf(el)!==i)
    return  words.map((el,i)=>duplicate.includes(el)?words[i]=")":words[i]='(').join('')
}
//test cases
console.log(duplicateEncode('decerere'))//()()()