// // Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.integer statues

//     An array of distinct non-negative integers.

//     Guaranteed constraints:
//     1 ≤ statues.length ≤ 10,
//     0 ≤ statues[i] ≤ 20.

//     [output] integer

//     The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.


// 1. resenje *********************************************

// function makeArrayConsecutive2(statues) {
 	
	// var higherStat = 0;
	// var lowestStat = statues[0];
	
	// for (i = 0; i < statues.length; i++) {
		
	// 	if (statues.length >= 1 && statues.length <= 10 && statues[i] >= 0 && statues[i] <= 20) {

	// 		if (higherStat < statues[i]) {

	// 			higherStat = statues[i];
	// 		}

	// 		if (statues[i] > statues[i + 1]) {
				
	// 			lowestStat = statues[i + 1];
	// 		}
	// 	}
	// }

	// for (i = 1; i + lowestStat < higherStat; i++) {
	// 	for ( n = 1; n < statues.length; n++) {
	// 		if (lowestStat + i === statues[n]) {

	// 		}
	// 	}
	// }
	
	// var missingStats = [];
	
	// for (n = lowestStat; n <= higherStat; n++) {
	// 	missingStats.push(n);
	// }

	// for (n = 0; n < statues.length; n++) {
	// 	for (i = 0; i <= missingStats.length; i++) {

	// 		if (statues[n] === missingStats[i]) {
	// 			missingStats.splice(i, 1);
	// 		}
	// 	}
	// }

	// return missingStats.length;
// }

// console.log(makeArrayConsecutive2([6, 2, 3, 8]));    


// 2. resenje *********************************************

function makeArrayConsecutive2(statues) {

	var maxNum = Math.max.apply(null, statues);
	var minNum = Math.min.apply(null, statues);

	var missingStats = [];
	
	for (n = minNum; n <= maxNum; n++) {
		missingStats.push(n);
	}

	for (n = 0; n < statues.length; n++) {
		for (i = 0; i <= missingStats.length; i++) {

			if (statues[n] === missingStats[i]) {
				missingStats.splice(i, 1);
			}
		}
	}

	return missingStats.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));