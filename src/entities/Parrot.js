const Animal = require('./Animal');

class Parrot extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    makeSound() {
        return "Hi!";
    }

    getFood() {
        return "seeds";
    }
}

module.exports = Parrot;
