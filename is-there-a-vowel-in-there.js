// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//P: takes in an array of numbers that may or may not have numbers that can be converted to lowercase values via ASCII codes mixed in

//R: Return array as is if only numbers, or with that vowel replacing the value if one is found.

//E:

//isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
//isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);


//P:

//determine what a e i o u are equal to in ascii values. 
//check if the ascii code is in the elements of the array. If they're present, change the code to the letter.
//return the new array

// 97 = a
// 101 = e
// 105 = i
// 111 = 0
// 117 = u

function isVow(arr){
    let newArr = arr.map(num =>{
       if (num === 97){
           return "a";
       }else if (num === 101){
           return "e";
       }else if (num === 105){
           return  "i";
       }else if (num === 111){
           return "o";
       }else if (num === 117){
           return "u";
       } else {
           return num
       }
   })
 return newArr
 }
