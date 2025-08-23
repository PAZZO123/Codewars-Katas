function cakes(recipe, available) {
  let result=[]
  for(let key in recipe){
    result.push(Math.floor(available[key]/recipe[key]))
  }
  return result.includes(NaN)?0:Math.min(...result)
}