function OnceNamedOne(first, last) {
  // Define firstName as read-only
  Object.defineProperty(this, 'firstName', {
    value: first,
    writable: false,       // cannot be changed
    configurable: false,   // cannot redefine
    enumerable: true
  });
  Object.defineProperty(this, 'lastName', {
    value: last,
    writable: false,
    configurable: false,
    enumerable: true
  });

  Object.defineProperty(this, 'fullName', {
    value: first + ' ' + last,
    writable: false,
    configurable: false,
    enumerable: true
  });
}
