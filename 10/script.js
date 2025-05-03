// //find second max element
// let arr = [1,8,7,6,10,9,9,10,11,11];
// let max = Math.max(arr[0],arr[1]);
// let smax = Math.max(arr[0],arr[1]);
// for(let i=2;i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         smax = max;
//         max = arr[i];
//     }
//     else if(arr[i]>smax && arr[i]!=max)
//     {
//         smax = arr[i];
//     }
// }
// console.log('Second Max '+smax);
// console.log('Max Is '+max);
// //find second mix element
// let min = Math.min(arr[0],arr[1]);
// let smin = Math.max(arr[0],arr[1]);
// for(let i=2;i<arr.length;i++)
// {
//     if(arr[i]<min)
//     {
//         smin = min;
//         min = arr[i];
//     }
//     else if(arr[i]<smin && arr[i]!=min)
//     {
//         smin = arr[i];
//     }
// }
// console.log('Second Min '+smin);
// console.log('Min Is '+min);
// //— Q 27. All zeroes to left and all ones to right
// let arr3 = [1,1,0,1,0,1,1,0,0];
// let i=0;j=0;
// while(i<arr3.length)
// {
//     if(arr3[i]==0)
//     {
//         let temp = arr3[i];
//         arr3[i] = arr3[j];
//         arr3[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr3);

// //— Q 28. Array left Rotation by 1
// let arr4 = [1,2,3,4,5];
// let temp = arr4[0];
// for(let i=0;i<arr4.length;i++)
// {
//     arr4[i] = arr4[i+1];

// }
// arr4[arr4.length-1] = temp;
// console.log(arr4);
// Q 29. Array right Rotation by
let arr4 = [1,2,3,4,5];
let temp = arr4[arr4.length-1];
for(let i=arr4.length-1;i>0;i--)
{
    arr4[i] = arr4[i-1];

}
arr4[0] = temp;
console.log(arr4);
