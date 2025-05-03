function binarySearch(arr, target) {
//     let low = 0, high = arr.length - 1;
    
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
        
//         if (arr[mid] === target) {
//             return mid+1; // Element found
//         } else if (arr[mid] < target) {
//             low = mid + 1; // Search right half
//         } else {
//             high = mid - 1; // Search left half
//         }
//     }
//     return -1; // Element not found
// }

// // Example usage
// console.log('-----------Binary Searching-------------');

// let prompt = require('prompt-sync')();
// let size = Number(prompt(' Enter Size of Array '));
// let arr = new Array (size);
// console.log(' Enter elements of Array ')
// for(let i=0;i<size;i++)
// {
//     arr[i] = Number(prompt(` Enter element ${i + 1}: `)); // Convert input to number

// }

// let target = Number(prompt(' Enter a Target Value '));
// arr.sort((a, b) => a - b); // Ensure the array is sorted before binary search
// if(binarySearch(arr, target)==-1)
// {
//     console.log('-->Element Not Found in Array<--');
// }
// else{


//     console.log('*(Element Found At) ----->'+binarySearch(arr, target)); // Output: 3 (index of 7)
// }
