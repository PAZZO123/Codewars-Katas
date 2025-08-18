const pigIt=(str)=>str.split(' ').map(n=>!(n==="!"||n==="?")?n.slice(1)+n.charAt(0)+'ay':n).join(' ')
//test cases