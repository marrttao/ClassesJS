class FeedingUseCase {
    constructor(logger) {
        this.logger = logger;
    }

    feedAllAnimals(zoo) {
        const animals = zoo.getAnimals();
        animals.forEach(animal => {
            const food = animal.getFood ? animal.getFood() : 'generic food';
            this.logger.info(`${animal.getName()} the ${animal.getType().toLowerCase()} is eating ${food}.`);
        });
    }

    zookeeperFeedAnimals(zookeeper, zoo) {
        const animals = zoo.getAnimals();
        animals.forEach(animal => {
            if (zookeeper.canFeed(animal)) {
                const food = animal.getFood ? animal.getFood() : 'food';
                this.logger.info(`${zookeeper.getName()} is feeding ${animal.getName()} the ${animal.getType().toLowerCase()} ${food}.`);
            } else {
                this.logger.warn(`${zookeeper.getName()} cannot feed ${animal.getName()}.`);
            }
        });
    }
}

module.exports = FeedingUseCase;
