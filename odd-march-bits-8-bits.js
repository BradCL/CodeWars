// Odd bits are getting ready for Bits Battles.

// Therefore the n bits march from right to left along an 8 bits path.

// Once the least-significant bit reaches the left their march is done.

// Each step will be saved as an array of 8 integers.

// Return an array of all the steps.

// 1 <= n <= 8

// NOTE: n != 0, because n represents the number of 1s.

// This resembles a simple 8 LED chaser :

// n = 3

// 00000111
// 00001110
// 00011100
// 00111000
// 01110000
// 11100000
// n = 7

// 01111111
// 11111110


//P:
//Takes in a number from 1 - 8


//R:
//returns however many arrays it takes for the first element of the array to not equal 0. Each array is a movement from right to left with the number given being the amount of 1's going from right to left in the last position.


//E:
// (bitMarch(1), [
//     [ 0, 0, 0, 0, 0, 0, 0, 1 ],
//     [ 0, 0, 0, 0, 0, 0, 1, 0 ], 
//     [ 0, 0, 0, 0, 0, 1, 0, 0 ],
//     [ 0, 0, 0, 0, 1, 0, 0, 0 ],
//     [ 0, 0, 0, 1, 0, 0, 0, 0 ], 
//     [ 0, 0, 1, 0, 0, 0, 0, 0 ],
//     [ 0, 1, 0, 0, 0, 0, 0, 0 ],
//     [ 1, 0, 0, 0, 0, 0, 0, 0 ],
// ]);

// bitMarch(3), [
//     [0, 0, 0, 0, 0, 1, 1, 1, ],
//     [0, 0, 0, 0, 1, 1, 1, 0, ],
//     [0, 0, 0, 1, 1, 1, 0, 0, ],
//     [0, 0, 1, 1, 1, 0, 0, 0, ],
//     [0, 1, 1, 1, 0, 0, 0, 0, ],
//     [1, 1, 1, 0, 0, 0, 0, 0, ],
// ];

// bitMarch(2), [
//     [ 0, 0, 0, 0, 0, 0, 1, 1 ],
//     [ 0, 0, 0, 0, 0, 1, 1, 0 ], 
//     [ 0, 0, 0, 0, 1, 1, 0, 0 ],
//     [ 0, 0, 0, 1, 1, 0, 0, 0 ],
//     [ 0, 0, 1, 1, 0, 0, 0, 0 ], 
//     [ 0, 1, 1, 0, 0, 0, 0, 0 ],
//     [ 1, 1, 0, 0, 0, 0, 0, 0 ],
// ];


//P:

// create empty array of 0's with 8 elements
// create an array to be returned
// while loop where condition is array[0] !== 0


function bitMarch (n) {
    let array = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
    let returnArray = [];
    array = array.map((ele, index) => index < n ? 1 : 0).reverse();
    returnArray.push(array);
    while(array[0] === 0){
      array = array.map((ele, index) => index !== array.length-1 ? array[index+1] : 0);
      returnArray.push(array);
    }
    return returnArray;
    }
  