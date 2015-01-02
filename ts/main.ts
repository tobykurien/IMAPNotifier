/**
 * Main entry point
 */
import u = require("./utils");

class Main {
   constructor(private myname: string) {
      console.log("Hello")
   }

   greet() {
      alert("Hello " + this.myname + u.test())
   }
}

var m = new Main("Joe3!")
m.greet()
