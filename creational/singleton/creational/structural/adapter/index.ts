"use strict";
class OldPrinter {
    printText(text) {
        console.log("Old printer:", text);
    }
}
class PrinterAdapter {
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;
    }
    print(message) {
        this.oldPrinter.printText(message);
    }
}
// Використання
const old = new OldPrinter();
const adapter = new PrinterAdapter(old);
adapter.print("Hello Adapter");
