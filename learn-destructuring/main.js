const arr = ['hello', 'there', 'world'];

// destructuring using array pattern:
const [x, y] = arr;
console.log(x); // hello
console.log(y); // there

// object destructuring
const address = {
    street: 'Evergreen Terrace',
    number: '742',
    city: 'Springfield',
    state: 'NT',
    zip: '49007',
};
const { street: s, city: c } = address;
console.log(s);
console.log(c);

// can object-destructure primitive values
const { length: len } = 'abc'; // length of the string 'abc' is the value of `len`
console.log(len);

// object-destructuring to multiple return values
function returnMany(a, b) {
    return { a, b };
}
console.log(returnMany(0,1));