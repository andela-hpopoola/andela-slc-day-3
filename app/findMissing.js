'use strict';

// This function reverses a passed string.
var findMissing = function findMissing(arr1, arr2) {

	// return null: not array
	if ((!Array.isArray(arr1)) && (!Array.isArray(arr1))) {

		// not an array : return 0
		return 0;

	} else {

		var arrayLength1 = arr1.length;
		var arrayLength2 = arr2.length;
		var diff = [];

		/*
		 *  Return 0 for the following cases
		 *  if arr1 is empty
		 *  if arr2 is empty
		 *  if the length of arr1 is equal to length of arr2
		 */
		if ((arrayLength1 === 0) || (arrayLength2 === 0) || (arrayLength1 === arrayLength2)){
			return 0;
		}

		// compare arraylength
		if (arrayLength1 > arrayLength2){

			// check the difference between arr1 and arr2
			diff = arr1.difference(arr2);

		} else {

			// check the difference between arr2 and arr1
			diff = arr2.difference(arr1);
		}


		/*
		 * The question states that there will
		 * be only one difference in the
		 */
		if (diff.length === 1){

			// return the first element
			return diff[0];

		} 

		// return 0 for unknown conditions
		return 0;
		
	}
}


/*
 *  difference is an Array Prototype
 *  to find the difference between 2 arrays
 *
 *  @returns array
 *  
 *  Tip gotten from http://stackoverflow.com/a/33034768
 */
Array.prototype.difference = function(arr){

	// return only values that doesn't exist arr
	return this.filter(function (value){

		/*
		 *  Check if current element is inside the arr
		 *
		 *  I used lastIndexof since indexOf will throw an error
		 *  from prototypeArraySpec.js file when npm test is invoked
		 *  
		 */
		return arr.lastIndexOf(value) === -1;

	});
}

// console.log(findMissing([1,2,3,4,5], [1,2,3,4,5]));


module.exports = {
	findMissing: findMissing,
}