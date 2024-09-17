/*
Create a function named max that takes 2 number arguments
 and returns the largest of the two.
 Create a function named min which is the same as max,
  but returns the lowest.
  */

  function max(num1, num2) {
    if (num1 > num2) {
     return num1
    }else {
        return num2
    }
  }

  console.log(max(0,6))

  function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
  }
  console.log(min(5,9))