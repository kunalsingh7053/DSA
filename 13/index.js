// let arr = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr);
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         process.stdout.write(" "+arr[i][j]);
//     }
//     console.log();
    
// }

//take dynamic value from user(2D Array)
// let prompt = require("prompt-sync")();
// let size = Number(prompt('Enter  Array Size'));  // e.g., 3
// let arr = new Array(size);  // Creates an outer array of length 3
// let innersize = Number(prompt('Enter Inner Array Size'));  // e.g., 3

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(innersize);  
// }
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         arr[i][j] = Number(prompt('Enter element'));  

//     }
// }
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//       process.stdout.write(" "+arr[i][j]);


//     }
//     console.log();
    
// }

//RIGHT &  lEFT DIAGONAL SUM IN 2D ARRAY.
// let leftsum = 0;
// let rightsum = 0;
// let arr = 
// [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ];
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         if(j == i)
//         {
//             leftsum += arr[i][j];
//         }
//         if(i+j == arr.length-1)
//         {
//             rightsum += arr[i][j];

//         }
//     }
// }
// console.log("Left Sum:-"+leftsum);
// console.log("Right Sum:-"+rightsum);
//3D Array
// let arr = [[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]],[[13,14,15],[16,17,18]]];
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         for(let k=0;k<arr[i][j].length;k++)
//         {
//             process.stdout.write(" "+arr[i][j][k]);
//         }

//         console.log();
        
//     }
//     console.log();
    
// }

//One Line Create 2D Array
let arr = Array.from({length:3},()=>Array(4).fill(1));
console.log(arr);

