const sumDigits=(number)=>String(Math.abs(number)).split('').reduce((ac,el)=>ac+(+el),0)
