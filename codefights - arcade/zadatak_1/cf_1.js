// Write a function that returns the sum of two numbers.

// Example

// For param1 = 1 and param2 = 2, the output should be
// add(param1, param2) = 3.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] integer param1

//     Guaranteed constraints:
//     -100 ≤ param1 ≤ 1000.

//     [input] integer param2

//     Guaranteed constraints:
//     -100 ≤ param2 ≤ 1000.

//     [output] integer

//     The sum of the two inputs.



function add(param1, param2) {
    
	if (param1 <= 1000 && param1 >= -100 && param2 >= -100 && param2 <= 1000) {
		
		var sum = param1 + param2;

	}

	else {

		alert("enter number between -100 and 1000")
	}

	return sum;
};

console.log(add(3, 33));