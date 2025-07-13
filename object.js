const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Add getter property using defineProperty
Object.defineProperty(person, "fullName", {
  get: function() {
    return this.firstName + " " + this.lastName;
  }
});

// Get all properties
var result = Object.getOwnPropertyNames(person);
console.log(result);           // ['firstName', 'lastName', 'language', 'fullName']
console.log(person.fullName); // John Doe objects
//test
