const ApplicationFactory = require('./src/ApplicationFactory');

function main() {
    const app = new ApplicationFactory();
    
    const zooManagement = app.getZooManagementUseCase();
    const feeding = app.getFeedingUseCase();
    
    const zoo1 = app.createZoo();
    const zoo2 = app.createZoo();
    
    const dog = app.createDog("Buddy", 5);
    const cat = app.createCat("Whiskers", 3);
    const parrot = app.createParrot("Polly", 2);
    
    const zookeeper = app.createZookeeper("John");
    
    console.log("=== Zoo Management System (Clean Architecture) ===\n");
    
    console.log("1. Adding animals to zoo:");
    zooManagement.addAnimalToZoo(zoo1, dog);
    zooManagement.addAnimalToZoo(zoo1, cat);
    zooManagement.addAnimalToZoo(zoo1, parrot);
    
    console.log("\n2. All animals making sounds:");
    zooManagement.makeAllAnimalSounds(zoo1);
    
    console.log("\n3. Zoo feeding all animals:");
    feeding.feedAllAnimals(zoo1);
    
    console.log("\n4. Zookeeper feeding animals:");
    feeding.zookeeperFeedAnimals(zookeeper, zoo1);
    
    console.log("\n5. Transferring cat to second zoo:");
    zooManagement.transferAnimal(cat, zoo1, zoo2);
    
    console.log("\n6. Animals in zoo1 after transfer:");
    zooManagement.makeAllAnimalSounds(zoo1);
    
    console.log("\n7. Animals in zoo2 after transfer:");
    zooManagement.makeAllAnimalSounds(zoo2);
    
    console.log("\n8. Serializing zoo1:");
    const zooRepository = app.getZooRepository();
    const serialized = zooRepository.toJson(zoo1);
    console.log("Serialized zoo:", serialized);
    
    console.log("\n9. Deserializing zoo:");
    const deserializedZoo = zooRepository.fromJson(serialized);
    console.log("Deserialized zoo animals:");
    zooManagement.makeAllAnimalSounds(deserializedZoo);
}

function createLegacyExample() {
    console.log("\n=== Legacy API Compatibility ===");
    const app = new ApplicationFactory();
    
    const zoo = app.createZoo();
    const dog = app.createDog("Rex", 4);
    const cat = app.createCat("Mittens", 2);
    
    const zooManagement = app.getZooManagementUseCase();
    const feeding = app.getFeedingUseCase();
    
    zooManagement.addAnimalToZoo(zoo, dog);
    zooManagement.addAnimalToZoo(zoo, cat);
    
    zooManagement.makeAllAnimalSounds(zoo);
    
    feeding.feedAllAnimals(zoo);
}

if (require.main === module) {
    main();
    createLegacyExample();
}

module.exports = { ApplicationFactory };
