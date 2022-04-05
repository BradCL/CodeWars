//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.

//P: Only takes in numbered arrays
//R:  Returns a single number which is all the array integers added together
//E:

// arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);

//P: Get the sum of each array via reduce, then add them together to get the total number.


function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, c) => acc + c, 0) + arr2.reduce((acc, c) => acc + c, 0)
  }