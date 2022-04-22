// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//P:
//Takes in a number that can't be less than 1


//R:
//Returns an array of [human years, cat age, dog age] in that order

//E:
//humanYearsCatYearsDogYears(10), [10,56,64]
//humanYearsCatYearsDogYears(2), [2,24,24]
//humanYearsCatYearsDogYears(1), [1,15,15]

//P:
// Since number can't be less than 1, start the cat and dog at age 15. If statement where if the age is 2, add the 9 years since both share +9 in their second year, else if their age is greater than 2, add the 9 to the initial fifteen, and then subtract those two years from the total human years and multiply by their respective 3rd year + value.



var humanYearsCatYearsDogYears = function(humanYears) {
    let allYears = []
    let catAge = 15
    let dogAge = 15
    if (humanYears === 2){
        catAge = 24
        dogAge = 24
    }else if (humanYears > 2){
        catAge += 9 + (humanYears - 2) * 4;
        dogAge += 9 + (humanYears - 2) * 5;
    }
    allYears.push(humanYears, catAge, dogAge)
    return allYears
  }
