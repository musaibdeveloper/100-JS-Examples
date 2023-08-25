// 19. JavaScript Program to Make a Simple Calculator.

let num1 = +prompt("Enter the first number here : ")
let operator = prompt("Enter the operator here : ")
let num2 = +prompt("Enter the second number here : ")




if (operator == "+") {
    console.log(num1 + num2);
} else if (operator == "-"){
    console.log(num1-num2);
}else if (operator == "*"){
    console.log(num1*num2);
}else if (operator == "%"){
    console.log(num1%num2);
}else if (operator == "/"){
    console.log(num1/num2);
}