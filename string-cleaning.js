// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:

// stringClean('! !') == '! !'
// stringClean('123456789') == ''
// stringClean('This looks5 grea8t!') == 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

//P:
//takes in strings if letters numbers and symbols

//R:
//return the string with just the letters and symbols while removing numbers

//E:
//  stringClean("! !"), "! !")
//  stringClean("123456789"), "")


//P:
// split string into an array | Check array for numbers | return new array without those numbers

// ...Scratch that, I learned what Regex is. Looks like I can just replace any digit with an empty space.

function stringClean(s){
    return s.replace(/\d/g, "");
    }