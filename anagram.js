var isAnagram = (test, original) =>test.toLowerCase().split('').sort().join('')===original.toLowerCase().split('').sort().join('')

//test console
console.log(isAnagram("foefet", "toffee"))