// program to check if the string is palindrome or not

const string = prompt("Enter here")
function check(string){

    const arrayValues = string.split("")

    const reverseArrayValues = arrayValues.reverse();

    const reverse = reverseArrayValues.join("");

    if(string == reverse){
        console.log("PalinDrome");
    } else {
        console.log("Not ");
    }

}

check(string)
