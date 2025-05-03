//Brute Force Approach.
// // — Q 29. Array left rotation by K elements
// let arr = [1,2,3,4,5];
// let k = 3;
// console.log(arr);

// for(let j=1;j<=k;j++)
//  {
        
//         let temp = arr[0];
//     for(let i=0;i<arr.length;i++)
//     {
//       arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = temp;
    
// }
// console.log(arr);
// — Q 29. Array right rotation by K elements

// let arr = [1,2,3,4,5];
// let k = 3;
// console.log(arr);

// for(let j=1;j<=k;j++)
//  {
        
//         let temp = arr[arr.length-1];
//     for(let i=arr.length-1;i>0;i--)
//     {
//       arr[i] = arr[i-1];
//     }
//     arr[0] = temp;
    
// }
// console.log(arr);


//Efficient Approach
//left rotation by k position
// let arr = [1,2,3,4,5];
// console.log(arr);

// let temp = new Array(arr.length);
// let k = 3;
// k = k % arr.length;
// for(let i=0;i<arr.length;i++)
// {
//     temp[i] = arr[(i+k)%arr.length];
// }
// console.log(temp);

//rigth rotation by k position
// let arr = [1, 2, 3, 4, 5];
// console.log("Original Array:", arr);

// let temp = new Array(arr.length);
// let k = 3;
// k = k % arr.length; // Ensure k is within bounds

// for (let i = 0; i < arr.length; i++) {
//     temp[(i + k) % arr.length] = arr[i]; // Correct element shifting
// }

// console.log("Rotated Array:", temp);

//Super Efficient Approach
//------BLOCK SWAP REVERSE ALGORITHM-------
//Left Rotation by K position
// let arr = [1,2,3,4,5];
// let prompt = require('prompt-sync')();
// let k = Number(prompt('Enter a Number'));
// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1);
// reverse(arr,0,arr.length-1)
// console.log(arr);


// function reverse(arr,i,j)
// {
//       while(i<j)
//       { 
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;


//         i++;
//         j--;
//       }
// }
//right Rotation by K position
// let arr = [1,2,3,4,5];
// let prompt = require('prompt-sync')();
// let k = Number(prompt('Enter a Number'));
// reverse(arr,0,arr.length-1);
// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1)
// console.log(arr);


// function reverse(arr,i,j)
// {
//       while(i<j)
//       { 
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;


//         i++;
//         j--;
//       }
// }

//Linear Searching || Sequential Searching
console.log('-----------Linear Searching-------------');
let prompt = require('prompt-sync')();
let size = Number(prompt(' Enter Size of Array '));
let arr = new Array (size);
console.log(' Enter elements of Array ')
for(let i=0;i<size;i++)
    {
        arr[i] = Number(prompt(` Enter element ${i + 1}: `)); // Convert input to number
    
    }
     let target = Number(prompt(' Enter a Target Value '));

for(let i=0;i<size;i++)
{
    if(arr[i]==target)
    {
        index = i;
        break;
    }
}
if(index==-1)
{
     console.log('Element Not Found');
     
}
else {
    console.log('Element Found At '+(index+1)+" index");
    
}

//BINARY SEARCHING ALGORITHM
// function binarySearch(arr, target) {
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
