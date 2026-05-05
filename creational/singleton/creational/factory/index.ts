"use strict";
class Dog {
    speak() {
        console.log("Woof");
    }
}
class Cat {
    speak() {
        console.log("Meow");
    }
}
class AnimalFactory {
    static createAnimal(type) {
        if (type === "dog")
            return new Dog();
        if (type === "cat")
            return new Cat();
        throw new Error("Unknown animal");
    }
}
// Використання
const animal = AnimalFactory.createAnimal("dog");
animal.speak();
