# Zoo Management System - Clean Architecture

This project demonstrates how to refactor a monolithic JavaScript application into a clean architecture pattern.

## Architecture Overview

The application is organized into the following layers:

### 1. Entities (Domain Layer)
Located in `src/entities/`

- **Animal.js** - Base entity for all animals
- **Dog.js, Cat.js, Parrot.js** - Specific animal implementations
- **Zoo.js** - Aggregate root for managing animals
- **Zookeeper.js** - Entity representing a zookeeper

These contain the core business logic and rules. They are independent of any external concerns.

### 2. Use Cases (Application Layer)
Located in `src/usecases/`

- **ZooManagementUseCase.js** - Handles zoo operations (add animals, transfer, sounds)
- **FeedingUseCase.js** - Handles feeding operations for both zoo and zookeeper

These orchestrate the entities to fulfill specific business requirements.

### 3. Interfaces (Ports)
Located in `src/interfaces/`

- **ZooRepository.js** - Interface for zoo persistence
- **Logger.js** - Interface for logging output

These define contracts that the infrastructure layer must implement.

### 4. Infrastructure (Adapters)
Located in `src/infrastructure/`

- **JsonZooRepository.js** - JSON implementation of zoo persistence
- **ConsoleLogger.js** - Console implementation of logging

These implement the interfaces and handle external concerns like I/O, databases, etc.

### 5. Dependency Injection
- **ApplicationFactory.js** - Creates and wires up all dependencies

## Benefits of This Architecture

1. **Separation of Concerns** - Each layer has a single responsibility
2. **Testability** - Easy to mock dependencies and test in isolation
3. **Flexibility** - Can easily swap implementations (e.g., file storage vs database)
4. **Maintainability** - Changes in one layer don't affect others
5. **Independence** - Core business logic doesn't depend on external frameworks

## Running the Application

```bash
# Run the clean architecture version
npm start

# Run the original version (for comparison)
npm run start:legacy
```

## File Structure

```
src/
├── entities/           # Domain entities
│   ├── Animal.js
│   ├── Dog.js
│   ├── Cat.js
│   ├── Parrot.js
│   ├── Zoo.js
│   └── Zookeeper.js
├── usecases/          # Application use cases
│   ├── ZooManagementUseCase.js
│   └── FeedingUseCase.js
├── interfaces/        # Ports (contracts)
│   ├── ZooRepository.js
│   └── Logger.js
├── infrastructure/    # Adapters (implementations)
│   ├── JsonZooRepository.js
│   └── ConsoleLogger.js
└── ApplicationFactory.js  # Dependency injection
```

## Key Improvements from Original Code

1. **Single Responsibility** - Each class has one clear purpose
2. **Dependency Inversion** - High-level modules don't depend on low-level modules
3. **Interface Segregation** - Small, focused interfaces
4. **Open/Closed Principle** - Open for extension, closed for modification
5. **Error Handling** - Proper error handling and validation
6. **Testability** - Each component can be tested in isolation

## Adding New Features

To add new features:

1. **New Animal Type**: Create a new entity extending Animal
2. **New Storage Type**: Implement the ZooRepository interface
3. **New Output Method**: Implement the Logger interface
4. **New Business Logic**: Create new use cases
5. **Wire Dependencies**: Update ApplicationFactory

This architecture makes the codebase much more maintainable and extensible!
