// methods

async function asynchronousFunction() {
    console.log("hello async function"); // prints #1
    return "goodbye async function"; 
}

// main

asynchronousFunction().then((onFulfilled) => {
    console.log(`Promise was resolved: ${onFulfilled}`); // prints #3
})

console.log("in global scope") // prints #2

/*
console:

hello async function
in global scope
Promise was resolved: goodbye async function
*/