// Exercise 5
//
// Part 1 - Write
// ---------------
// Write a function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  // Insert missing solution please

  let sum = 0;
  nums.forEach((num) =>{
  	if(typeof(num) != "number"){
  		sum+= 0;		
  	}
  	else{
  		sum+= num;	  		
  	}
  })

  if(nums.length<=0){
  	sum = undefined;
  }

  return sum;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
