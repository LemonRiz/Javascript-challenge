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

// Write a function that takes three numbers and returns the largest of the three numbers.
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