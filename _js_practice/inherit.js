let inherit = function (parent, child) {
  
  let Surrogate = function () { };
  Surrogate.prototype = parent.prototype
  //sets up the chain  of inheritance by setting the prototype to the animal prototype
  
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
  //sets the constructor to dog, so it knows it's a dog?
};

module.exports = inherit;