// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//P: Takes in an integer only

//R: returns the integer with each number squared and concatinated

//E: 

//squareDigits(3212), 9414)
//squareDigits(2112), 4114)
//squareDigits(0), 0)

//P:

// Convert the number into a string which I can then split into an array
// map the array to turn each element from a string into a number
// map the array again to square all the numbers
// join the array after all numbers have been squared
// conver the joined array from a string to a number

function squareDigits(num){
    num = String(num)
      .split("")
      .map(nums => Number(nums));
    const squareArr = num.map(nums => nums * nums);
    return Number(squareArr.join(""))
  }