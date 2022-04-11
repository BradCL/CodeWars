// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

//So given a string "super", we should return a list of [2, 4].

//Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

//P:
// Takes in a string. Just 1 word

//R:
//Returns the index of each vowel in the given string

//E:
//vowelIndices("mmm"), []);
// vowelIndices("apple"), [1,5]);
// vowelIndices("super"), [2,4]);

//P:
// set array of vowels to a variable
// checks the code to see if it contains any of those variables
// if it finds any of the vowels from the array in the string, it returns their index in array form.

function vowelIndices(word){
    word = word.toLowerCase();
    const indicies = [];
    const vowels = ["a","e","i","o","u","y"];
    for (i=0; i<word.length; i++){
        if(vowels.indexOf(word[i])>=0){
            indicies.push(i+1)
        }
    }
    return indicies
}

//Struggled with this one due to not reading clearly enough. Y is a vowel, capitals needed to be accounted for, and the indexing started at 1 instead of 0.
//Forgot you could access index of a work with word[i]

