function stringExpansion(s){
  let times=1
  return s.split('').map(char=>{
    if(!isNaN(char)){
      times=+char
      return ""
    }
    else return char.repeat(times)
  }).join('')
}

//joined