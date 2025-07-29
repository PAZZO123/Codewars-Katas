"use strict";

const flattenAndSort=(array)=>array.flat().sort((a,b)=>a-b)
  //test
  console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))//[1, 2, 3, 4, 5, 6, 100]
