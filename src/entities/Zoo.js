const Animal = require('./Animal');

class Zoo {
    constructor() {
        this.animals = [];
    }

    addAnimal(animal) {
        if (!(animal instanceof Animal)) {
            throw new Error("Only animals can be added to the zoo");
        }
        this.animals.push(animal);
    }

    removeAnimal(animal) {
        const index = this.animals.indexOf(animal);
        if (index === -1) {
            throw new Error("Animal not found in zoo");
        }
        this.animals.splice(index, 1);
    }

    getAnimals() {
        return [...this.animals];
    }

    getAnimalCount() {
        return this.animals.length;
    }

    hasAnimal(animal) {
        return this.animals.includes(animal);
    }
}

module.exports = Zoo;
