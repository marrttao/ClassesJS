class ZooRepository {
    async save(zoo) {
        throw new Error('Method must be implemented');
    }

    async load(id) {
        throw new Error('Method must be implemented');
    }

    toJson(zoo) {
        throw new Error('Method must be implemented');
    }

    fromJson(json) {
        throw new Error('Method must be implemented');
    }
}

module.exports = ZooRepository;
