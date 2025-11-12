function vowelBack(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return [...s].map(ch => {
    let code = ch.charCodeAt(0);
    let newcode;
    if (ch === 'c'||ch === 'o') newcode = code - 1;
    else if (ch === 'd') newcode = code - 3;
    else if (ch === 'e') newcode = code - 4;
    else if (vowels.includes(ch)) newcode = code - 5;
    else newcode = code + 9;
    
    if (newcode < 97) newcode += 26;
    if (newcode > 122) newcode -= 26;

    let newChar = String.fromCharCode(newcode);

    if (['c', 'o', 'd', 'e'].includes(newChar)) newChar = ch;

    return newChar;
  }).join('');
}

//test cases
console.log(vowelBack('testcase'))