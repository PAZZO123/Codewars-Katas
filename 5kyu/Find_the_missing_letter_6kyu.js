function findMissingLetter(arr) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const sequence = arr[0] === arr[0].toUpperCase() ? upper : lower;

  const start = sequence.indexOf(arr[0]);
  const end = sequence.indexOf(arr[arr.length - 1]);

  for (let i = start; i <= end; i++) {
    if (!arr.includes(sequence[i])) {
      return sequence[i];
    }
  }

  return null; 
}
//test cases
console.log(findMissingLetter(['o','q','r','s'])); //->p
