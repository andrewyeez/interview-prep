/**
 * this keyword in javascript can be ambigous.
 *
 * In this demo we will demonstrate its multiple uses.
 * An example I read about how to describe 'this' keyword
 * is we describe a noun in a sentence.
 *
 * Ex:
 *   Andrew bought a cake and he ate it.
 *
 *   'He' in this case is Andrew and we used the word 'he' to describe
 *   an action that Andrew did.
 *
 *  'this' keyword can take the place of the Object that invoked the function
 *  that used the keyword 'this'.
 *
 */

let fruit = {
  name: "Apple",
  getName: function(){
    // this = fruit
    // this.name = Apple
    console.log("I ate an " + this.name);
  },
  otherObj: {
    name: "Orange",
    // this = otherObj
    // this.name = Orange
    getOtherName: function(){
      console.log("I ate an " + this.name);
    }
  }

}

// Function Context
console.log(fruit.name);
fruit.getName(); // this.name = Apple
fruit.otherObj.getOtherName(); // this.name = Orange

// Global context
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Global_context
name = "global";
// a little oopsie haha LET does not create a variable on the global Object
// even if its created oustide a function
// REMINDER: read more on LET
let name2 = "notGLobal"
console.log(this === window); // true
console.log(window.name); // window.name = "global"
console.log(this.name); // this.name = "global"
console.log(this.name2); // undefined because we use 'let'
