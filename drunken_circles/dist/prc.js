function Animal(name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  this.name = name;
}

// Cat.prototype = new Animal();

// function Surrogate() {}
// Surrogate.prototype = Animal.prototype;
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat;

Cat.prototype = Object.create(Animal.prototype)


Cat.prototype.meow = function () {
  console.log('Meow!');
}

const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();


class Cat extends Animal {
  constructor(name, personality) {
    super(name)
    this.personality = personality;
  }

  meow() {
    console.log('Meow!')
  }
}