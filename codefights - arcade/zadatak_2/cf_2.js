// Given the string, check if it is a palindrome.

// Example

//     For inputString = "aabaa", the output should be
//     checkPalindrome(inputString) = true;
//     For inputString = "abac", the output should be
//     checkPalindrome(inputString) = false;
//     For inputString = "a", the output should be
//     checkPalindrome(inputString) = true.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] string inputString

//     A non-empty string consisting of lowercase characters.

//     Guaranteed constraints:
//     1 ≤ inputString.length ≤ 105.

//     [output] boolean

//     true if inputString is a palindrome, false otherwise.



function centuryFromYear(year) {
    
	if (year >= 1 && year <= 2005) {

		for (var n = 1; n <= 21; n++) {

			if ( year >= ((n - 1) * 100 + 1) && year <= n * 100) {

				var century = n;
			}
		}
	}

	return century;
}

