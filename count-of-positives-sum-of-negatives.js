//Count of positives / sum of negatives

const countPositivesSumNegatives = input => Array.isArray(input) === true && input.length > 0 ? [input.filter(num => num > 0).length , input.filter(num => num < 0).reduce((acc, c) => acc + c, 0)] :  []

// function countPositivesSumNegatives(input) {
//     if (Array.isArray(input) === true && input.length > 0){
//     const positiveArr = input.filter(num => num > 0).length;
//     const negativeArr = input.filter(num => num < 0).reduce((acc, c) => acc + c, 0);
//     return [positiveArr, negativeArr]
//   }else{
//       return [];
//   }
// }
