// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).


//P: Always a series of strings separated by commas |  Can be empty
//R: New string w/o first and last char | If this removes all values or none exist, return null
//E: 

console.log(array("1,2,3"), "2")
console.log(array("1,2,3,4"), "2")
console.log(array("1,2"), "NULL")

//P: Create function that takes in a string | Convert string to array | shift and pop values off of array | if <= 2 values in array, return Null | join resulting array back to string 

function array(arr){
    const arrToStr = arr.split(",")
    if (arrToStr.length > 2){
        arrToStr.pop()
        arrToStr.shift()
        return arrToStr.join(" ")
    }else {
     return null
    }
 }