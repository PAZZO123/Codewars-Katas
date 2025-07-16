var capitals = (word)=>word.split('').map((n,idx)=>n<='Z'&& n>='A'?idx:'').filter(n=>n!=='')
//test
console.log(capitals('IloVe CodInG With My HearT'))