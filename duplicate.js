var uniqueInOrder = function(iterable) {
  var result = [];
  var prev = undefined;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== prev) {
      result.push(iterable[i]);
      prev = iterable[i];
    }
  }

  return result;
};
