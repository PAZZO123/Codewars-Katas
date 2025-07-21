var checkExam=(array1, array2) =>Math.max(array1.reduce((c,el,i)=>array2[i]===el?c+=4:array2[i]===''?c+=0:c-=1,0),0)
//test 
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))//0
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))