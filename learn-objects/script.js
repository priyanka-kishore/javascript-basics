const x = 'howdy';

// computed property - var or expression as property name
const object = {
    [x]: 23
}

// referencing a computer property
console.log(object.howdy);

// deleting an object's property
delete object.howdy
console.log(object);
console.log(object.howdy);

// adding property to an object
object.hello = 'hello there';
console.log(object.hello);

// duplicating objects, reference not shared
const clone = Object.assign({}, object)
object.hello = "world"
console.log(clone.hello !== object.hello); // not shared

// duplicate object using spread syntax
const clone2 = { ...object };
console.log(clone2)

// plus adding another property
const clone3 = {
    ...object,
    another: "property"
}
console.log(clone3);



// OBJECT METHODS

const myObject = {
    name: "Jeff",
    hello() {
        console.log(`whats up ${this.name}`);
    }
}
myObject.hello();

// Arrow functions
const blob = {
    name: 'Bubby',
    hello: () => console.log(this.name)
    // since the hello() function uses an arrow function,
    // it is not bound to `this`, the current blob object.
    // it is bound to the outer object's `this`
}
blob.hello();