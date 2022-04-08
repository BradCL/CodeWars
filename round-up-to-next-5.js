//Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

//P: 
//Takes in a number | Can be positive or negative | No digit limitations

//R:
// Rounds the number up to the closest value divisible by 5.

//E:

//console.log(roundToNext5(6)) ,10

//console.log(roundToNext5(12)) ,15

//console.log(roundToNext5(-22)) ,-20


//P:

// set a variable to n % 5. Add that variable to n to round it up to the nearest divisible by 5.

function roundToNext5(n){
    let round = n % 5;
    if (round === 0){
      return n
    }else if(n > 5){
      return n + (5 - round);
    }else if(n < -5){
      return n + Math.abs(round)
    }else if(n <= 5 && n > 0){
      return 5;
    }else {
      return 0
    }
}