// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


//P:
// takes in two numbers 


//R:
// Returns the two numbers added together in Binary Format

//E:
//1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


//P:
// add numbers together, convert to binary using toString(2) then return the result.



function addBinary(a,b) {
    let bin = (a + b).toString(2)
    return bin
  }

  //const addBinary = (a, b) => (a + b).toString(2)