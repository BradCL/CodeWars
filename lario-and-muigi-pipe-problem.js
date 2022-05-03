// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

//P:
//Takes in an array of numbers.


//R:
//returns an array of sequential numbers from the first number to the last number in the array without skipping any.


//E:
// assert.deepEqual(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
// assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
// assert.deepEqual(pipeFix([6,9]),[6,7,8,9]);
// assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4]);
// assert.deepEqual(pipeFix([1,2,3]),[1,2,3]);


//P:
//for loop that pushes results to a new array that's returned | set i to the first number in the array, and condition will be less than or equals the last number of the array since it needs to also have that number. | i ++


function pipeFix(numbers){
    let result = [];
    for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
      result.push(i)
    }
    return result
  }