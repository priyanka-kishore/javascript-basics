/**
 * 
 * Closures are just a mechanism for handling variable scope.
 * 
 * The following is a "closure", where the `printName` function
 * has access to variables declared around it, which are in it's
 * scope.
 */

let myName = 'Priyanka'; // global variable

function printName() {
    console.log(myName);
    // The key here, is that we can access the `myName` variable
    // that is declared outside of this `printName` function.
}

myName = 'Theo';
// The above variable changed to "Theo", instead of "Priyanka"

printName();



/**
 * People usually use closures as functions inside of functions.
 * 
 * Most common use case:
 */
function outerFunction(outerVariable) {
    // `outerVariable` is only available in this function

    function innerFunction(innerVariable) {
        console.log("Outer variable: " + outerVariable);
        // `outerVariable` is accessible by the `innerFunction` due
        // to the nature of closures

        console.log("Inner variable: " + innerVariable);
    }

    return innerFunction;
}

const newInnerFunction = outerFunction("outside");
// Without calling `newInnerFunction`, nothing gets console logged.
// This is because the `newInnerFunction` currently "holds" the place
// of the `innerFunction` which was returned by `outerFunction`.

// After `outerFunction` is done executing and returns `innerFunction`
// to the callee, the variable `outerVariable` is no longer accessible,
// so calling the following would not work:
//      console.log(outerVariable); <-- undefined

// However, calling `newInnerFunction` will still be able to access the value
// of the variable `outerVariable` because it's within access of its CLOSURE,
// it saves the `outerVariable` and other variables as part of its CLOSURE 
// called `newInnerFunction`. Still keeps track of the `outerVariable`.

newInnerFunction("inside"); // a closure that is being called

/**
 * But why?
 * 
 * Pass in variables to functions that can be accessed by other functions.
 * 
 * More common use case:
 */
function fetchFunction(url) {
    fetch(url).then(() => { // arrow (anonymous, no-named) function
        console.log(url);
    })

    // This is a closure, because `fetch` will call the function inside the
    // `then` clause long after `fetchFunction()` is executed.
}

fetchFunction("../learn-modules/some-module.mjs");

/**
 * SUMMARY:
 * 
 * Closure =
 *      when you have a function defined inside of another function,
 *      the inner function has access to the variables and scope of
 *      the outer function... even if the outer function finishes
 *      executing and those variables are no longer accessible outside
 *      of that function.
 * 
 * Closure =
 *      a mechanism for handling variable scope.
 * 
 * Closure =
 *      the function defined within a closure "remembers" the environment
 *      in which it was created.
 *      (it remembers references to variables, not the value itself, so if the
 *      value changes, then the variable changes).
 * 
 * (Similar to instantiating a class object in Java, I think?)
 */
