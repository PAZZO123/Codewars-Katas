function wave(str) {
  //first concatenate something to string
  //repeat string up to its length in order to make array
  //check whether string has content
  // if yes split with what you have concatenated before
  //map array and capitalize each letter corresponding to current index ignore spaces
  //filter all elements that are not empty string
  let strs='4'+str;
  const repeated =strs.repeat(str.length);
  return str.length? repeated.split('4').map((chunk, i) => {
          if (str[i] === ' ') return null; 
          return (str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1) );
        }).slice(0,str.length).filter(Boolean) : [];
}
