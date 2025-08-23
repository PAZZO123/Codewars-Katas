function cakes(recipe, available) {
  let result=[]
  for(let key in recipe){
    result.push(Math.floor(available[key]/recipe[key]))
  }
  return result.includes(NaN)?0:Math.min(...result)
}
//test cases 
const  recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
   const  available = {sugar: 500, flour: 2000, milk: 2000};