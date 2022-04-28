// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

//P:
//takes in a string of two names


//R:
//returns the name with the string reversed in order

//E:
//nameShuffler('john McClane'),'McClane john');

//P:
// Turn names into an array of two elements with split | Reverse array and re join with " "

const nameShuffler = str => str.split(" ").reverse().join(" ")