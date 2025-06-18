//transpose of matrix.

//   @param {number[][]} matrix
//   @return {number[][]}
 
// var transpose = function (matrix) {
//     let ans = Array.from({length:matrix[0].length},()=> Array(matrix.length))
//     for (let i = 0; i <ans.length; i++) {
//         for (let j = 0; j < ans[i].length; j++) {
//             ans[i][j] = matrix[j][i] 
//         }
//     }
//     return ans;
// };

//Rotate img

//   @param {number[][]} matrix
//   @return {void} Do not return anything, modify matrix in-place instead.
 
// var rotate = function(matrix) {
//     for(let i=0; i<matrix.length;i++)
//     {
//         for(let j=i;j<matrix.length;j++)
//         {
//             let temp = matrix[i][j];
//             matrix[i][j] =matrix[j][i];
//             matrix[j][i] = temp; 
//         }
//     }
//     for(let i=0;i<matrix.length;i++)
//     {
//         let left = 0;
//         let right = matrix.length-1;
//         while(left<right)
//         {
//             let temp = matrix[i][left];
//             matrix[i][left] = matrix[i][right];
//             matrix[i][right] = temp;
//             left++;
//             right--;
//         }
//     }
// };

//spiral matrix

//  @param {number[][]} matrix
//  @return {number[]}
 
// var spiralOrder = function(matrix) {
//     let ans = [];
// let row = matrix.length;
// let col = matrix[0].length;
// let count = 0;
// let total = row*col;
// //index initialize
// let startingrow = 0;
// let startingcol = 0;
// let endingrow = row-1;
// let endingcol = col-1;  
// while(count<total)
// {
//     //print starting row.
    
//     for(let i=startingcol;count<total && i<=endingcol;i++)
//     {
//         ans.push(matrix[startingrow][i]);
//         count++

//     }
//         startingrow++;
//     for(let i=startingrow;count<total && i<=endingrow;i++)
//     {
//       ans.push(matrix[i][endingcol]);
//       count++

//     }
//     endingcol--;
//     for(let i=endingcol;count<total && i>=startingcol;i--)
//     {
//             ans.push(matrix[endingrow][i])
// count++

//     }
//     endingrow--;
//     for(let i=endingrow;count<total && i>=startingrow;i--)
//     {
//                   ans.push(matrix[i][startingcol])
// count++
//     }
//     startingcol++;
// }
// return ans;
// };

//Flipping img
// let arr =
// [
//   [1,0,0],
//   [1,1,0]
//   [0,1,0]
// ]
// for(let i=0;i<arr.length;i++)
// {
//   let left = 0;
//   let right = arr.length-1;
//   while(left<right)
//   {
//         let temp = arr[i][left];
//         arr[i][left] = arr[i][right];
//         arr[i][right] = temp;
//         left++;
//         right--;
//   }
// }
// console.log(arr);

// Maximum Difference Between Increasing Elements.
// brute force approach
// function maxdiff(arr)
// {
//     let diff = -1;
//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=i+1;j<arr.length;j++)
//         {
//               if(arr[i]<arr[j])
//               {
//                   diff = diff>arr[j]-[i]?diff=diff:diff=arr[j]-arr[i];

//               }
//         }
//     }
//     return diff;
// }
// let arr = [7,1,5,6];
// console.log(maxdiff(arr));
//optimal approach

// function maxdiff(arr)
// {
//     let min = arr[0];
//     let diff = -1;

//     for(let j=1;j<arr.length;j++)
//     {
//     if(arr[j]>min)
//     {

//         diff = diff>arr[j]-min?diff=diff:diff=arr[j]-min;
//     }
//     else{
//         min = arr[j];
//     }
            
        
//     }
//     return diff;
// }
// let arr = [7,1,5,4];
// console.log(maxdiff(arr));