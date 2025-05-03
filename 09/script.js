// // //strong number
// // हिन्दी में
// // In English
// // A number is called strong number if sum of the factorial of its digit is equal to number itself. For example: 145.
// let prompt = require('prompt-sync')();
// let n = prompt("enter a number");
// let ans = 0;
// let real = n;
// while(n > 0)
// {
//      let dig = n%10;
//     let  fact = 1;
//      for(let i=1;i<=dig;i++)
//      {
//         fact = fact*i;
//      }
//     ans = ans + fact;
// n = Math.floor(n/10);
// }
// if(ans==real)
// {
//     console.log("strong number");
    
// }
// else{
//     console.log('No strong number');
    
// }

//array
let prompt = require("prompt-sync")();
let size = Number(prompt("enter array size "));
let arr = new Array(size);
let sum = 0;
let max;
let min;
for(let i=0;i<arr.length;i++)
{
arr[i] = Number(prompt("enter element in "+i+" index =>"));
sum = sum + arr[i];
if(i===0)
{

    max = arr[0];
    min = arr[0];
}
if(max<arr[i])
{
    max = arr[i];
}
if(min>arr[i])
{
    min = arr[i];
}

}
console.log("maximum is =>"+max);
console.log("minimun is =>"+min);

console.log("sum => "+sum);

