// Area = sqrt(p * (p-a) * (p-b) * (p-c))
// where p = half the perimeter = (a + b + c) / 2
function calculate_area_triangle(a, b, c) {
    var p = (a + b + c) / 2;
    return Math.sqrt(p * (p-a) * (p-b) * (p-c));
}

// Should print 14.6969
console.log(calculate_area_triangle(5, 6, 7));