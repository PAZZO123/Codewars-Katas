


function vowel2index(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char.toLowerCase())) {
      result += (i + 1); 
    } else {
      result += char;
    }
  }

  return result
}
