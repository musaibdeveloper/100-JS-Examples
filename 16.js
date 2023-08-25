// 16. JavaScript program to generate Fibonacci Series Up to n Terms | Fibonacci Sequence Up to a Certain Number.

/*
The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
 After that, the next term is defined as the sum of the previous two terms.

*/

let num = 5;

let firstterm = 0;
let secondterm = 1 , nextterm; 

for( let i = 0; i<=num; i++){
    console.log(firstterm);
    nextterm = firstterm + secondterm;
    firstterm = secondterm;
    secondterm = nextterm
}


