let Animal = require("./animal.js");
let inherit = require("./inherit.js");
function Dog(name) {
  Animal.call(this, name);
  //constructor function/initialize
};



inherit(Animal, Dog);

Dog.prototype.woof = function () {
  console.log("woof, I am " + this.name);
};
module.exports = Dog;