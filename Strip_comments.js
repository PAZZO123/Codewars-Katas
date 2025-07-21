function solution(text, markers) {
  return text
    .split('\n') 
    .map(l => {
      for (let m of markers) {
        const i= l.indexOf(m);
        if (i !== -1) {
          l = l.slice(0, i);
        }
      }
      return l.trimEnd(); 
    })
    .join('\n');
}
