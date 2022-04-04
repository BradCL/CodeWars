//Calculate BMI

function bmi(weight, height) {
  const userBmi = weight / (height*height) 
  if(userBmi <= 18.5){
    return "Underweight"
  }else if (userBmi <= 25 && userBmi > 18.5){
    return "Normal"
  }else if (userBmi > 30){
    return "Obese"
  }else {
  return "Overweight";
    }
}
bmi(180, 72)