// 10. JavaScript Program to Check given number is Prime Number.
// A prime number is a positive integer that is only divisible by 1 and itself. 
// a number that can be divided exactly only by itself and 1, for example 7, 17 and 41.


let num = +prompt("Enter the number : ")

if(num === 1){
    console.log("1 is neither prime nor composite number");
}
else if(num < 1){
    console.log("Number is not prime");
}
else {
    for(let i = 2 ; i<num ; i++)

     if(num%i == 0){
        console.log("NUmber is not prime");
        break;
     } else{
        console.log("number is prime");
     }
    
}