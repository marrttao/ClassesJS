class Animal {
    constructor(name, age) {
        if (!name || !age) {
            throw new Error('Name and age are required for an animal');
        }
        this.name = name;
        this.age = age;
    }

    makeSound() {
        return "...";
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getType() {
        return this.constructor.name;
    }

    toJSON() {
        return {
            type: this.constructor.name,
            name: this.name,
            age: this.age
        };
    }
}

module.exports = Animal;
