
/*Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake*/
var correct=(string)=>string.replaceAll('0','O').replaceAll('5','S').replaceAll('1','I');
