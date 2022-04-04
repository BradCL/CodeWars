//I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
    let choices = [
      "I love you", 
      "a little", 
      "a lot", 
      "passionately", 
      "madly", 
      "not at all"
    ]
    return choices[(nbPetals - 1) % choices.length] 
}