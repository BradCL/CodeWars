// Find the last number between 1 and n (inclusive) that survives the elimination process

// ####How It Works

// Start with the first number on the left then remove every other number moving right until you reach the the end, then from the numbers remaining start with the first number on the right and remove every other number moving left, repeat the process alternating between left and right until only one number remains which you return as the "last man standing"

// ##Example

// given an input of `9` our set of numbers is `1 2 3 4 5 6 7 8 9`

// start by removing from the left    2   4   6   8
//                                  1   3   5   7   9


// then from the right                2       6
//                                        4       8


// then the left again                        6
//                                    2


// until we end with `6` as the last man standing
// Note: due to the randomness of the tests it is possible that you will get unlucky and a few of the tests will be really large, so try submitting 2 or 3 times.

//P
//Takes in a single number, must be positive


//R:
// returns the remaining number when you remove the first number, and then every other number moving right until you reach the end, and them from the numbers remaining, starting with the first number on the right and removing every other number moving left. This continues until the last number remains which is returned.


//E:
// assertEquals(lastManStanding(1000), 510)
// assertEquals(lastManStanding(100), 54);
// assertEquals(lastManStanding(10), 8)

//P:
//assign a variable to an array of numbers based on the number given from 1 to that number with a loop.
//re assign that array value to remove every second number
//reverse the array and do the same as above
//repeat until 1 number remains




//My original solution which wasn't efficient enough and timed out the codewars server
function lastManStanding(n){
    let nArray = []
    for (let i = 1; i <= n; i++){
    nArray.push(i)
    }
    while(nArray.length > 1){
        for (let j = 0; j <= nArray.length; j++){
        nArray.splice(j, 1)
        }
        nArray.reverse()
    }
  return Number(nArray)
}

//Solution that worked aftera few attempts, but still timed out often. Need to work on speed
function lastManStanding(n){
    let nArray = [];
    for(let i = 2; i <= n; i+=2) {
        nArray.push(i);
    }

    do{
      nArray = nArray.reverse().filter((num, index) => index % 2 != 0);  
    }while(nArray.length > 2)
  return Number(nArray[0])
}

