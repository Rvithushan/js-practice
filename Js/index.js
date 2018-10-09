 // commment in js
 //console.log('Hello world!,js');
 //let name = "Vithu";
 
 let number = 5;
 /*for (; number > 0; number--)
 {
     number = number*(number-1);
 }
 console.log(number);*/
 while (number < 5)
 {
     sum = number * (number-1);

<<<<<<< HEAD
//function factorial(x){
  //  if (x === 0)
 //   {
   // return 1;
    //}
      //  return x * factorial (x-1);
    //}
 //console.log(factorial(5));

var numarray = [15, 17, 86, 68, 13, 54, 81, 60, 26, 47, 93, 28]

reverse = numarray.reverse()
console.log(reverse)

    
=======
     
 }
>>>>>>> e7233b5e13c541abd7ec79feaf6515da84b487a3


function Grading(score) {
    var grade;
  
    switch(true) {
      case (score <= 100 && score >= 75):
         grade = 'A';
          break;
      case (score <= 74 && score >= 65):
          grade = 'B';
           break;
      case (score <= 64 && score >= 55):
          grade = 'C';
           break;
         case (score <= 54 && score >= 45):
          grade = 'D';
           break;
      case (score <= 44 && score >= 0):
          grade = 'F';
          break;
  
      case (score > 100 && score < 0):
          grade = 'INVALID SCORE';
          break; 
  
      default:
        return 'INVALID SCORE';
  }
      return grade;
  }
  
  print(Grading(85));
