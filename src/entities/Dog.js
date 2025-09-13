const Animal = require('./Animal');

class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    makeSound() {
        return "Woof!";
    }

    getFood() {
        return "meat";
    }
}

module.exports = Dog;
