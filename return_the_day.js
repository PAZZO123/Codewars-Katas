function whatday(num) { 
var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
return num>=1 && num<=7 ?days[num-1]:`Wrong, please enter a number between 1 and 7`
}