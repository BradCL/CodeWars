// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

//P:
// Only positive numbers | Never Empty | Never null

//R:
// If the number has an integer square root, return that | Otherwise Square the number

//E:
// squareOrSquareRoot([4,3,9,7,2,1]) // [2,9,3,49,4,1]

//P:
//Use modulus to determine if it's got an int square root by using Math.sqrt and modulus it by 1. If === 0, retun the square root of the number. Otherwise square the element in the array.

function squareOrSquareRoot(array) {
    const newArr = array.map(num => {
        if(Math.sqrt(num) % 1 === 0){
            return Math.sqrt(num)
        }else{
            return num * num
        }
    });
    return newArr
    
}