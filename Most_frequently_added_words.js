function topThreeWords(text) {
  if(text==="  '  ")return[]
 let textArr = text.toLowerCase()
  .replaceAll('/', ' ')          
  .replaceAll('\n', ' ')         
  .replaceAll(',', ' ')          
  .replaceAll('#', ' ')         
  .replaceAll("'t", "\'t")
  .replaceAll(".", '')           
  .split(' ')                    
  .filter(n => n !== '');        
    var seen={}     
for( let word of textArr ){
  seen[word]=(seen[word]||0)+1
}
 let target=Object.entries(seen).sort((a,b)=>b[1]-a[1]).slice(0,3)
 return target.map(el=>el[0])
 
}
//test console