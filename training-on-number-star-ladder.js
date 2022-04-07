// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

// Note: There is no newline in the end (after the pattern ends)

// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:

//P: 
//Takes in just a number

//R: 
//returns a string with 1 as the first number, and the end number at the end, with the end number -1 as the amount of stars in between the 1 and the last number

//E:
//pattern(3),"1\n1*2\n1**3");
//pattern(7),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7");
//pattern(20),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n1********9\n1*********10\n1**********11\n1***********12\n1************13\n1*************14\n1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n1*******************20")

//P:
//Create a for loop that starts at 1 and goes up to and includes (n).
//each loop produces an output of the necessary number of stars + i for each iteration.
//each loop changes output to output + the above formula
//if it's still the first iteration, so i is 1, we make output += 1
//start a new line at the beginning of each loops output value change


function pattern(n){
    let output="";
     for (i = 1; i <= n; i++){
       if(i > 1){
         output +=`\n1${'*'.repeat(i-1) + i}`;
         }else {
           output += "1"
         }
       }
    return output;
   }