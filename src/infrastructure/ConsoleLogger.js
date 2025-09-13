const Logger = require('../interfaces/Logger');

class ConsoleLogger extends Logger {
    info(message) {
        console.log(message);
    }

    error(message) {
        console.error(`ERROR: ${message}`);
    }

    warn(message) {
        console.warn(`WARNING: ${message}`);
    }
}

module.exports = ConsoleLogger;
