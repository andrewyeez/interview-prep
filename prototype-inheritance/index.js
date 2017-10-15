/**
 *  Prototype Inheritance
 *
 *  Prototype Inheritance allows a user to attach new properties to an object.
 *  This object will then have this new property whenever an instance of the
 *  object is created. The prototype property of an object can be accessed
 *  outside the scope where the object is being defined.
 */

function Person(n){
  this.name = n || "dummy";
  this.age = 23;
  this.getAge = function(){
    return "I am " + this.age + " old.";
  };
}

// Define a variable p to be an instance of the object Person
let p = new Person("Andrew");
console.log(p.getAge()); // I am 23 old.
console.log(p.getName); // undefined

// Define a new method getName for the object Person by using the prototype
Person.prototype.getName = function(){
  return "My name is " + this.name + ".";
};

// Define a new property for the variable p, which is an instace of the object Person
p.nickname = "Niko";
console.log(p.getName()); // My name is Andrew.
console.log(p.nickname); // Niko

// Define a variable p2 to be an instance of the object Person
let p2 = new Person("Alex");
// the property nickname belongs to the variable p and did not get attached to
// the object Persons property.
// Prototype must be used to attach new properties to an object.
console.log(p2.nickname); // undefined
