// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//P:
// take in array of non negative integer. 

//R:
//Returns that same number with all numbers going from left to right in descending order

//E:

// descendingOrder(0), 0)
// descendingOrder(111), 111)
// descendingOrder(123456789), 987654321

//P:

// split the number into an array of strings. sort the number strings in descending order. Join them and return as a number.


function descendingOrder(n){
    return Number(n.toString().split("").sort((a, b) => b-a).join(""))
  }

//Arrow function

const descendingOrder = n => Number(n.toString().split("").sort((a, b) => b-a).join(""))