"use strict";
class Add {
    execute(a, b) {
        return a + b;
    }
}
class Multiply {
    execute(a, b) {
        return a * b;
    }
}
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    execute(a, b) {
        return this.strategy.execute(a, b);
    }
}
// Використання
const context = new Context(new Add());
console.log(context.execute(2, 3));
context.setStrategy(new Multiply());
console.log(context.execute(2, 3));
