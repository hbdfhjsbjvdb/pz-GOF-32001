"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    sayHello() {
        console.log("Hello from Singleton");
    }
}
// Використання
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
obj1.sayHello();
console.log(obj1 === obj2); // true
