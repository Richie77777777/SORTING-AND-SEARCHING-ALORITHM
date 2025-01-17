function insertionSort(arr) {
    // Traverse through 1 to arr.length
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Test the insertionSort function
let array = [12, 11, 13, 5, 6];
console.log("Original array:", array);

let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
