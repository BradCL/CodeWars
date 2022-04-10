//Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

//P: take in array of strings


//R: return number reflecting highest value in the array


//E:

//longest(['simple', 'is', 'better', 'than', 'complex']),  7);
//longest(['explicit', 'is', 'better', 'than', 'implicit']), 8);
//longest(['beautiful', 'is', 'better', 'than', 'ugly']), 9);

//P:
//Sort array based on .length of array elements with longest in first position 
//return the .length of the string in the [0] index of the new array.

function longest(words) {
    let sortedWords = words.sort((a,b) => b.length - a.length);
    return sortedWords[0].length
  }
  
//Arrow function practice 
//const longest = words => words.sort((a,b) => b.length - a.length)[0].length