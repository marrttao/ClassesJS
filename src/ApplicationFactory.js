const ConsoleLogger = require('./infrastructure/ConsoleLogger');
const JsonZooRepository = require('./infrastructure/JsonZooRepository');

const ZooManagementUseCase = require('./usecases/ZooManagementUseCase');
const FeedingUseCase = require('./usecases/FeedingUseCase');

const Zoo = require('./entities/Zoo');
const Dog = require('./entities/Dog');
const Cat = require('./entities/Cat');
const Parrot = require('./entities/Parrot');
const Zookeeper = require('./entities/Zookeeper');

class ApplicationFactory {
    constructor() {
        this.logger = new ConsoleLogger();
        this.zooRepository = new JsonZooRepository();
        
        this.zooManagementUseCase = new ZooManagementUseCase(this.zooRepository, this.logger);
        this.feedingUseCase = new FeedingUseCase(this.logger);
    }

    getZooManagementUseCase() {
        return this.zooManagementUseCase;
    }

    getFeedingUseCase() {
        return this.feedingUseCase;
    }

    getLogger() {
        return this.logger;
    }

    getZooRepository() {
        return this.zooRepository;
    }

    createZoo() {
        return new Zoo();
    }

    createDog(name, age) {
        return new Dog(name, age);
    }

    createCat(name, age) {
        return new Cat(name, age);
    }

    createParrot(name, age) {
        return new Parrot(name, age);
    }

    createZookeeper(name) {
        return new Zookeeper(name);
    }
}

module.exports = ApplicationFactory;
