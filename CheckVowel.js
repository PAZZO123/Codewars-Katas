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