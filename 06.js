// Javascript Program to Solve Quadratic Equation.
// Quadratic Equations are of the form ax2 + bx + c = 0.

let a = +prompt("Enter the first number: ");
let b = +prompt("Enter the second number: ");
let c = +prompt("Enter the third number: ");

// calculate discriminant
let D = b * b - 4 * a * c;

console.log(D);