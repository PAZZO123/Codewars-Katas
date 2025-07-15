var capitals = (word)=>word.split('').map((n,idx)=>n<='Z'&& n>='A'?idx:'').filter(n=>n!=='')
