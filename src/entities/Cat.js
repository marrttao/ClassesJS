const Animal = require('./Animal');

class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    makeSound() {
        return "Meow!";
    }

    getFood() {
        return "fish";
    }
}

module.exports = Cat;
