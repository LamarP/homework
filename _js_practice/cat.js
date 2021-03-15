let Animal = require("./animal.js");
let inherit = require("./inherit.js");

let Cat = function (name) {
  Animal.call(this, name);
};

inherit(Animal, Cat);

Cat.prototype.meow = function () {
  console.log("meow, I am " + this.name);
};

module.exports = Cat;