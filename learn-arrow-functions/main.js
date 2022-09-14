class Person {
    constructor(name) {
        this.name = name;
    }

    // Arrow function: uses the scope of the `this` instance in the scope where this function is defined
    printNameArrow() {
        setTimeout(() => {
            console.log('W/ arrow: ' + this.name)
        }, 100)
    }

    // Normal function: uses the scope of the `this` instance that the function invocation is in
    printNameFunction() {
        setTimeout(function() {
            console.log('W/ function: ' + this.name)
        }, 500)
    }
}

let bubby = new Person("Bubby");
bubby.printNameArrow(); // prints "Bubby"
bubby.printNameFunction(); // prints "undefined",  evaluated like static functions
// ^ the `this` in global scope does not have a `name`

// More intuitive to use Arrow functions, confusing to use the `this`
// instance where the function is invoked rather than where it is defined.