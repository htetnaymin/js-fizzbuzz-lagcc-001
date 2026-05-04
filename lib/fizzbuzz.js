'use strict';

let fizzbuzz = function(num){
	// Write your code here
	if(num % (3*5) == 0)
	{
		return "FizzBuzz";
	}
	else if(num % 3 == 0)
	{
		return "Fizz";
	}
	else if(num % 5 == 0)
	{
		return "Buzz";
	}
	return num;
	
};

module.exports = fizzbuzz; 