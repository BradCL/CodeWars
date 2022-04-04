//Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  let newArr1 = arr1.map(num => num)
  let newArr2 = arr2.map(num => num)
  let setToRemoveDuplicates = new Set (arr1.concat(arr2))
  let mergedArr = Array.from(setToRemoveDuplicates)
  return mergedArr.sort((a,b) => a-b)
}