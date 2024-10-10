

// Linear search Algorithms


const LinearSearch = (arr, x) => { 

    for (let i = 0; i < arr.length; i++) { 

        if (arr[i] === x) return i; 
    } 

    return -1; 
}


let arr = [2, 3, 4, 10, 40];
let x = 10;
LinearSearch(arr, x); // 3 -> index of 10

let y = 100;
LinearSearch(arr, y); // -1 -> 100 is not in the array
