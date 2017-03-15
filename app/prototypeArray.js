'use strict';


/*
 *  toTwenty() is an Array Prototype
 *  that returns 1 to 20 with a step of 1
 *  
 *  returns `[1, 2, 3 . . . 20]`
 */
Array.prototype.toTwenty = function(){

	// start at 1, end at 20, increment with 1
	for(var i = 1; i <= 20; i += 1){
	    this.push(i);
	}

	return this;
}


/*
 *  toForty() is an Array Prototype
 *  that returns 2 to 4 by using a step of 2
 *  
 *  returns `[2, 4, 6 . . . 40]`
 */
Array.prototype.toForty = function(){

	// start at 2, end at 40, increment with 2
	for(var i = 2; i <= 40; i += 2){
	    this.push(i);
	}

	return this;
}


/*
 *  toOneThousand() is an Array Prototype
 *  that returns 10 to 1000 with a step of 10
 *  
 *  returns `[10, 20, 30 . . . 1000]`
 */
Array.prototype.toOneThousand = function(){

	// start at 10, stop at 1000, increment by 10
	for(var i = 10; i <= 1000; i += 10){
	    this.push(i);
	}

	return this;
}


/*
 *  search() is an Array Prototype
 *  implementing the binary search function
 *  
 *  @param {Interger} number
 *  @return {Object}
 * 
 */
Array.prototype.search = function(number){

	var arrayLength = this.length; // number of elements the array
	var low = 0; // the first element in the array
	var high = arrayLength - 1; // get the last element in the array
	var middle = Math.floor((low + high)/ 2); // calculate middle
	var count = 0; // assume the count is 0

	// Not a number, return -1
    if (!Number.isInteger(number)) {
        return -1;
    }


	/*
	 *  Compare the high, low and middle with number
	 *  @not-found: increment low 
	 *  @not-found: decrement high 
	 *
	 *  
	 */
	if (number === this[low]){ 
		return { 
			count: count, 
			index: low,
			length: arrayLength
		};

	} else {

		// increment low to avoid checking for it again
		low = low + 1;

	}

	if (number === this[high]){ // number is equal to highest index

		return { 
			count: count, 
			index: high,
			length: arrayLength
		};

	} else {

		high = high - 1;
	} 

	// number is equal to middle index
	if (number === this[middle]){ 

			return { 
				count: count, 
				index: middle,
				length: arrayLength
			};

	}


	/*
	 *  Search through the array for the number
	 *  returns an object if number is found
	 *  
	 *  if low === high, the loop will terminate
	 *  Number not found
	 */
	while (low <= high) {

		count++; // Increment count

		// Get the middle number
		middle = Math.floor((low + high)/ 2);

		
		if (number === this[low]){ // number is equal to lowest index
			return { 
				count: count, 
				index: low,
				length: arrayLength
			};

		} else {
			low = low + 1;

		}

		if (number === this[high]){ // number is equal to highest index

			return { 
				count: count, 
				index: high,
				length: arrayLength
			};

		} else {
			
			high = high - 1;
		} 


		if (number > this[middle]){ // number is greater than middle number

			/*
			 *  Shift lowest number forward
			 *  Number can be found in next branch
			 *  >>>
			 */ 
			low = middle + 1;

		} else if (number < this[middle]) {

			/*
			 *  Shift highest number backward
			 *  Number can be found in previous branch
			 *  <<<
			 */ 
			high = middle - 1;

		} else {

			/*
			 *  Number Found
			 *  return an object
			 *  
			 *  count : number of iterations made
			 *  index : index of number found
			 *  length : number of elements in array
			 */ 
			return { 
				count: count, 
				index: middle,
				length: arrayLength
			};
		}
	}

	// Not found, return object
	return {
		count: count,
		index: -1,
		length: arrayLength
	};;
}

var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();

var search  = tenToOneThousand.search(40);
search = oneToTwenty.search(33);
console.log(twoToForty.search(20));
// console.log(search);

module.exports = Array.prototype;