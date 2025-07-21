function checkExam=(array1, array2) =>Math.max(array1.reduce((c,el,i)=>array2[i]===el?c+=4:array2[i]===''?c+=0:c-=1,0),0)
// {
//  var count=0
//  for(var i=0;i<array1.length;i++){
//    array2[i]===""?count+=0:array1[i]===array2[i]?count+=4:count-=1  
//  }
//   return count>0?count:0;
// }