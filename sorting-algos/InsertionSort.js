//-insertion sort Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(insertionSort([1, 4, 8, 5, 9, 2])); //i=5 j=8   5=>8
