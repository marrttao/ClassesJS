const ZooRepository = require('../interfaces/ZooRepository');
const Zoo = require('../entities/Zoo');
const Dog = require('../entities/Dog');
const Cat = require('../entities/Cat');
const Parrot = require('../entities/Parrot');
const Animal = require('../entities/Animal');

class JsonZooRepository extends ZooRepository {
    constructor() {
        super();
    }

    async save(zoo) {
        const json = this.toJson(zoo);
        return json;
    }

    async load(id) {
        return new Zoo();
    }

    toJson(zoo) {
        const animals = zoo.getAnimals();
        const serializedAnimals = animals.map(animal => animal.toJSON());
        return JSON.stringify(serializedAnimals);
    }

    fromJson(json) {
        const data = JSON.parse(json);
        const zoo = new Zoo();
        
        data.forEach(item => {
            let animal;
            switch (item.type) {
                case 'Dog':
                    animal = new Dog(item.name, item.age);
                    break;
                case 'Cat':
                    animal = new Cat(item.name, item.age);
                    break;
                case 'Parrot':
                    animal = new Parrot(item.name, item.age);
                    break;
                default:
                    animal = new Animal(item.name, item.age);
            }
            zoo.addAnimal(animal);
        });
        
        return zoo;
    }
}

module.exports = JsonZooRepository;
