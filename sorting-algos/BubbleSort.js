/*Bubble sort */

function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(BubbleSort([3, 5, 2, 1, 0, -8, 14, 4, 9]));

//worst time complexity 0(n^2)
//Best Case (already sorted array): O(n)
