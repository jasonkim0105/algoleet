// Move Element to End

// You’re given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

// The function should perform this in place (i.e., mutate the input array) and doesn’t need to maintain the order of the other integers. Solve this in linear time.


// Sample Input
// array = [2, 1, 2, 2, 2, 3, 4, 2]
// toMove = 2

// [2, 1, 2, 2, 2, 3, 4, 2]

// Sample Output
// [1, 3, 4, 2, 2, 2, 2, 2]

//iterate through array
//for each number in array, check to see if it is the toMove element
	//if so, i’ll move this to the back of the array
	//if not, just continue
//return array

moveToEnd(arr, toMove) {
	Let i = arr.length - 1;
while(i >= 0) {
	If (arr[i] === toMove){
	arr.push(arr[i])
arr.splice(i, 1)
	i–;
} else {
i–;
}
}
Return arr;
}
