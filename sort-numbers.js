// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//P:
// Takes in array of numbers | Can also be Null or Empty

//R:
//Returns array sorted in ascending order

//E:
// solution([2, 20, 10]), [2,10,20])
// solution([20, 2, 10]), [2,10,20])
// solution([]), [])

//P:
// Conditional to make null return empty array. | Sort method

function solution(nums){
    if(nums === null || nums.length < 1){
        return []
    } else {
        return nums.sort((a, b) => a - b)
    }
}

//Arrow Function Practice
const solutions = nums => nums === null || nums.length < 1 ? [] : nums.sort((a,b) => a - b)