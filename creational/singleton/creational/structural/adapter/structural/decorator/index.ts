"use strict";
class SimpleCoffee {
    cost() {
        return 10;
    }
}
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost() + 5;
    }
}
// Використання
let coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
console.log(coffee.cost()); // 15
