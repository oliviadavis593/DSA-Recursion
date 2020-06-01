
/*
Objective: Write rf that finds factorial of a given number 
1. factorial number can be found by multiplying that # by each number 
2. between itself and 1
*/

function factorialIterative(number) {
    let factorialNumber = 1;
    for (let i = number; i > 0; i--) {
      console.log(factorialNumber);
      factorialNumber *= i;
    }
  
    return factorialNumber;
  }
  
  console.log(factorialIterative(5));