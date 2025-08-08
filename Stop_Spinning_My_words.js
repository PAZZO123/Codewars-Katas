//split string by space to make array of words\
//map that array check the length of each word
//if length is 5 or higher reverse the word
//join the array by the space

const spinWords =(string)=>string.split(' ').map((n)=>n.length>=5?n.split('').reverse().join(''):n).join(' ')

//test cases
console.log(spinWords('stop spinning my words'))//stop gninnips my sdrow