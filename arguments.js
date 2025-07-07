function multiply(...args) {
  if (args.length === 1) {
    const first = args[0];

    if (Array.isArray(first)) {
      return first.map(n => n * 2);
    } else if (typeof first === 'number') {
      return first * 2;
    } else {
      throw new Error("Invalid input");
    }

  } else if (args.length === 2) {
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return args[0] * args[1];
    } else {
      throw new Error("Both arguments must be numbers")
    }
  } else {
    throw new Error("Invalid number of arguments")
  }
}
console.log(multiply([1,2,3,4]));
console.log(multiply(2));