class ZooManagementUseCase {
    constructor(zooRepository, logger) {
        this.zooRepository = zooRepository;
        this.logger = logger;
    }

    addAnimalToZoo(zoo, animal) {
        try {
            zoo.addAnimal(animal);
            this.logger.info(`Added ${animal.getName()} the ${animal.getType()} to the zoo`);
        } catch (error) {
            this.logger.error(`Failed to add animal: ${error.message}`);
            throw error;
        }
    }

    transferAnimal(animal, sourceZoo, targetZoo) {
        try {
            if (!sourceZoo.hasAnimal(animal)) {
                throw new Error('Animal not found in source zoo');
            }
            
            sourceZoo.removeAnimal(animal);
            targetZoo.addAnimal(animal);
            
            this.logger.info(`Transferred ${animal.getName()} the ${animal.getType()} between zoos`);
        } catch (error) {
            this.logger.error(`Failed to transfer animal: ${error.message}`);
            throw error;
        }
    }

    makeAllAnimalSounds(zoo) {
        const animals = zoo.getAnimals();
        animals.forEach(animal => {
            const sound = animal.makeSound();
            this.logger.info(sound);
        });
    }

    async saveZoo(zoo) {
        try {
            await this.zooRepository.save(zoo);
            this.logger.info('Zoo saved successfully');
        } catch (error) {
            this.logger.error(`Failed to save zoo: ${error.message}`);
            throw error;
        }
    }

    async loadZoo(id) {
        try {
            const zoo = await this.zooRepository.load(id);
            this.logger.info('Zoo loaded successfully');
            return zoo;
        } catch (error) {
            this.logger.error(`Failed to load zoo: ${error.message}`);
            throw error;
        }
    }
}

module.exports = ZooManagementUseCase;
