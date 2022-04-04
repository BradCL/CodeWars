//Convert number to reversed array of digits
const digitize = n => n.toString().split("").map(num => Number(num)).reverse();
