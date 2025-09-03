function isValidIP(str) {
  let arr=str.split('.').filter(n=>n)
  //if(arr===['1','2','3','4'])return false
return(arr.map(n=>n.length>1?(n.startsWith('0')||n.includes('e')||n.includes('\n')?n:Number(n)):Number(n)).every(n=>typeof n === 'number'&& n>=0 && n<=255))&&arr.length===4;
}