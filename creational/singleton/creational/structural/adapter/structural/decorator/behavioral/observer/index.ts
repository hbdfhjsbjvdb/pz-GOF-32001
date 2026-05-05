"use strict";
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
    }
    notify(data) {
        this.observers.forEach(fn => fn(data));
    }
}
// Використання
const subject = new Subject();
subject.subscribe((data) => {
    console.log("Observer 1:", data);
});
subject.subscribe((data) => {
    console.log("Observer 2:", data);
});
subject.notify("Hello Observers");
