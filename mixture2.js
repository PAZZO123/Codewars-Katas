function checkVowel(string, position) {
  //defining set of all vowels to checkin
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  
  // Check that position is valid
  if (position < 0 || position >= string.length) {
    return false;
  }

  // Convert to lowercase in case of uppercase letters
  return vowels.has(string[position].toLowerCase());
}
var check=checkVowel('Pazoo',3);
console.log(check);

//hop count 8kyu
var hoopCount =(n)=>n>=10?"Great, now move on to tricks":"Keep at it until you get it"
      
//dragon killed
var hero=(bullets, dragons)=>bullets>=dragons*2;

//return years
var getAge=(inputString) => parseInt(inputString);
console.log(getAge('8 years old'))//8

