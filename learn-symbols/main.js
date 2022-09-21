let sym1 = Symbol();
let sym2 = Symbol();

// Symbols are unique
console.log(sym1 == sym2); // false

// Symbols as computer property keys
let obj = {};
obj[sym1] = 'hello';
console.log(obj[sym1]); // hello