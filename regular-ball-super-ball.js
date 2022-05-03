// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


//P:
// Needs to take in a single argument for the type of ball | Must return "regular" if no argument is given


//R:
// Returns the type of ball based on the argument given, and "regular" if none are given


//E:
//Test.assertEquals(new Ball().ballType, "regular");
//Test.assertEquals(new Ball("super").ballType, "super");



//P:
// set a default "ballType" of string "regular"
// set this.ballType equal to the ballType argument 

var Ball = function(ballType = "regular") {
    this.ballType = ballType
};