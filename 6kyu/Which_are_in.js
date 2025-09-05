function inArray(array1,array2){
  //...
  let result=[]
  for(let par of array1){
    for(let part of array2){
      if(part.includes(par)){
        result.push(par)
      }
    }
  }
  return Array.from(new Set(result)).sort()
}
//test cases
console.log(inArray(['el','ask','ent'], ['element','task']))//[ 'ask', 'el', 'ent' ]