// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.


const isNumberPositive = (number) => {
    if (number > 0){
        return true
}   else if (number == 0){
    console.log ("Zero is neither");}
    else{
        return false
}}

console.log (isNumberPositive(-1))

// 2. Write a function that takes a number of days and converts it into an age.
const convertDaysToAge = (days) => {
    const years = (days / 365)
    return years
}

console.log (convertDaysToAge(3650))

//3. Write a function that takes three numbers and returns the largest of the three numbers.
const getLargestNumber = (num1, num2, num3) => {
    if ((num1 >= num2) && (num1 >= num3)){
        return num1;
    } else if ((num2 >= num1) && (num2 >=num3)){
        return num2;
    }else {
        return num3;
    } 
}
console.log(getLargestNumber(4, 6, 8));

//4. Write a function that takes an array of names and returns the last name from the array of names.
let names = ["Charlie", "Rob", "Andy"]

const getLastName = (names[names.length-1])

console.log (getLastName)

//5.Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

let numbers = [8, 5, 9];
const result = numbers.every(function (i) {
    return i > 0
});

console.log(result)