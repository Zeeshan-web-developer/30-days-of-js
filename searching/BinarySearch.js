
//Binary Search is a much faster form of search

//Binary search only works on sorted arrays!



//Binary Search Pseudocode
//This function accepts a sorted array and a value
//Create a left pointer at the start of the array, and a right pointer at the end of the array
//While the left pointer comes before the right pointer:
    //Create a pointer in the middle
    //If you find the value you want, return the index
    //If the value is too small, move the left pointer up
//If the value is too large, move the right pointer down
//If you never find the value, return -1


const binarySearch = (arr, elem) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) { // while the middle is not the element and the start is less than or equal to the end
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}


console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)); // -1
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)); // 5