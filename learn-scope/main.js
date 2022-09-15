// let-declare in a for loop
let arr = [];
for (let i=0; i < 3; i++) {
    arr.push(() => i);
    // an array of functions that returns i
}
console.log(arr.map(x => x())); // [0,1,2]
// ^ evaluating each function per index and printing it
// ^ for each iteration through indices, a fresh binding was created,
//   so there are new references to each new index (i=0,1,2) that is 
//   being evaluated when using the map function.
console.log(arr.map(x => typeof(x)))


// var-declare in a for loop
let arr2 = [];
for (var i=0; i < 3; i++) {
    arr2.push(() => i);
}
console.log(arr2.map(x => x())); // [3,3,3]
// ^ for each iteration through the indices, there was only ONE single
//   binding to `i`, so there is only ONE reference to i for each
//   iteration, so each x() evaluation prints "3" since i has reached 3
///  since map function is being evaluated after the for-loop finished
