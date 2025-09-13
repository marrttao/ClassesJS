class Zookeeper {
    constructor(name) {
        if (!name) {
            throw new Error('Name is required for a zookeeper');
        }
        this.name = name;
        this.allowedToFeed = ['Dog', 'Cat'];
    }

    getName() {
        return this.name;
    }

    canFeed(animal) {
        return this.allowedToFeed.includes(animal.getType());
    }
}

module.exports = Zookeeper;
