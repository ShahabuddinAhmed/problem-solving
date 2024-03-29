'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
	let positiveCount = 0;
	let negativeCount = 0;
	let zeroCount = 0;
	const arrLength = arr.length;
	arr.forEach(value => {
		if (value > 0) {
			positiveCount++;
		} else if (value < 0) {
			negativeCount++;
		} else {
			zeroCount++;
		}
	});

	console.log((positiveCount / arrLength).toFixed(6));
	console.log((negativeCount / arrLength).toFixed(6));
	console.log((zeroCount / arrLength).toFixed(6));
}

(function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
})()