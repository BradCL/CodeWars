// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.



//P: Will always be non empty string, with normal letters || No numbers or symbols


//R: True or False depending on if the tail is the same letter as the last letter of the body argument


//E:
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(correctTail("Fox", "x"), true);
//       assert.strictEqual(correctTail("Rhino", "o"), true);
//       assert.strictEqual(correctTail("Meerkat", "t"), true);   
//     })
//   })


//P:
// Compare the first index of the second argument to the last index of the first argument. If they match, true, else false

function correctTail (bod, tail){
    if (bod[bod.length-1] === tail[0]){
        return true
    }else {
        return false
    }
}


const correctTail = (bod, tail) => bod[bod.length-1] === tail[0] ? true : false