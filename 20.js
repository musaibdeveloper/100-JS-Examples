// program to find the factors of an integer

// take input
const num = 20

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}
// 1
// 2
// 4
// 5
// 10
// 20