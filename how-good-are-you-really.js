// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


//P:
// takes in two parameters, one being an array of the class scores, and the other being your score, a number. You can add your points into the array to calculate.

//R:
// Returns True if your score is higher than average, returns false if lower than average. 

//E:
// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
// betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
// betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);

//P:
// add your points into the array values
// reduce the array to a total sum
// divide that sum by the length of the array
// compare result to your score

function betterThanAverage(classPoints, yourPoints) {
    classPoints.unshift(yourPoints);
    let classAverage = classPoints.reduce((acc, c) => acc + c, 0)/classPoints.length
    if(classAverage < yourPoints){
      return true
    }else{
      return false
    }
    }

    //Arrow Function Practice
    // const betterThanAverage = (classPoints, yourPoints) => {
    //     classPoints.unshift(yourPoints);
    //     return classPoints.reduce((acc, c) => acc + c, 0)/classPoints.length < yourPoints ? true : false
    //     }