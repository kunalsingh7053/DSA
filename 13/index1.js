// take input to user sum of two matrix and print them .
 let prompt = require("prompt-sync")();
console.log("First Array Input");

let rows = Number(prompt('Enter Rows Size:-'));
let cols =  Number(prompt('Enter Colmun Size:-'));
let arr = new Array(rows);
for(let i=0;i<arr.length;i++)
{
    arr[i] = new Array(cols)
    for(let j=0;j<arr[i].length;j++)
    {
        arr[i][j] = Number(prompt("Enter Element At Index"+i+j+":-"));
    }
}
console.log("Second Array Input ");
let rows1 = Number(prompt('Enter Rows Size:-'));
let cols1 =  Number(prompt('Enter Colmun Size:-'));
let arr1 = new Array(rows1);
for(let i=0;i<arr1.length;i++)
{
    arr1[i] = new Array(cols1)
    for(let j=0;j<arr1[i].length;j++)
    {
        arr1[i][j] =  Number(prompt("Enter Element At Index"+i+j+":-"));
    }
}

// print array for cheking
// for(let i=0;i<arr.length;i++)
//     {
//         for(let j=0;j<arr[i].length;j++)
//         {
//             process.stdout.write(" "+arr[i][j]);
//         }
//         console.log();
        
//     }
    
// for(let i=0;i<arr1.length;i++)
//     {
//         for(let j=0;j<arr1[i].length;j++)
//         {
//             process.stdout.write(" "+arr1[i][j]);
//         }
//         console.log();
        
//     }
    

console.log("Sum Of Two Matrix");
let sum = new Array(rows);
for(let i=0;i<rows;i++)
{ 
    sum[i] = new Array(cols)
    for(let j=0;j<cols;j++)
    {
        sum[i][j] = arr[i][j]+arr1[i][j]; 
    }
}
// //print sum of two matrix
for(let i=0;i<sum.length;i++)
{
    for(let j=0;j<sum[i].length;j++)
    {
        process.stdout.write( sum[i][j].toString()+" ");
    }
    console.log();
    
}