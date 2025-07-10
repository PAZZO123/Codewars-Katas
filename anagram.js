var isAnagram = (test, original) =>test.toLowerCase().split('').sort().join('')===original.toLowerCase().split('').sort().join('')

//test
console.log(isAnagram("foefet", "toffee"))