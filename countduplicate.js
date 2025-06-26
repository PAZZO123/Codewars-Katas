function countDuplicate(text){
    var seen={};
    var count=0;
    var text=text.toLowerCase();
    for(let i=0;i<text.length;i++)
    {
        var item=text[i];
        if(seen[item]===undefined){
            seen[item]=1;
        }else{
            seen[item]+=1;
        }
    }
    for(let key in seen){
        if(seen[key]>1){
            count++;
        }
    }
    return count
}
console.log(countDuplicate("eeehhhhoooopppp"));