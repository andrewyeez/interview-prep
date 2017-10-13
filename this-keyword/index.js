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

console.log(fruit.name);
fruit.getName(); // this.name = Apple
fruit.otherObj.getOtherName(); // this.name = Orange
