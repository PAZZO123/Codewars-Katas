function whatListAmIOn(actions){
  const naughty = actions.filter(s => ['b', 'f', 'k'].includes(s[0])).length;
  const nice= actions.filter(s => ['g', 's', 'n'].includes(s[0])).length;
  
  return nice > naughty ? 'nice' : 'naughty';
}
//test cases
console.log(whatListAmIOn(['nabbi','sound','groom']))