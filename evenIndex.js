var  removeEveryOther=(arr)=>arr.filter((n,index)=>index%2===0)
/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]*/
console.log(removeEveryOther([2,3,5,6,7,8]))