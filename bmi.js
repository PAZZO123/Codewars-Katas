function bmi(weight, height) {
  var bmi= weight/(height*height);
  if(0<bmi && bmi<=18.5)
    {
      return"Underweight";
    }
  
   else if(25.0<bmi && bmi<=30.0){
    return"Overweight";
  }
  else if(18.5<bmi && bmi<=25.0)
    {
      return "Normal";
    }

  else if (bmi>30) {
    return"Obese";
  }
  
}
//check
console.log(bmi(74,2))