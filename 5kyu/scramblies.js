function scramble(str1, str2) {
  let seen1={}
  let seen2={}
  let arr1=str1.split('')
  let arr2=str2.split('')
  for(let char of arr1){
    seen1[char]=(seen1[char]||0)+1
  }
  for(let char of arr2){
    seen2[char]=(seen2[char]||0)+1
  }
  for(let key in seen2){
    if(seen2[key]>seen1[key]|| !seen1.hasOwnProperty(key))
      return false
  }
  return true
}
//test cases
console.log(scramble('cedewaraaossoqqyt', 'codewars'   ))