// The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two integers is the largest integer that can exactly divide both integers (without a remainder).

// For example, the HCF of 60 and 72 is 12.

let hcf;

let num1 = 5460;
let num2 = 76544;
// In the above program,enter two positive numbers.

for(let i = 1 ; i<=num1 && i<=num2 ; i++){
    // The for loop is used to iterate from 1 to numbers entered
  
     if(num1 % i == 0 && num2 % i == 0){
        hcf = i;
        // The if condition and modulus operator % is used to find the HCF of both numbers.
     } 
}
// In the above condition,
//  if both the integers number1 and number2 are exactly divisible by i, 
// the highest integer value that fulfils that condition is calculated.

console.log(hcf); // 52