//Bubble sort
// console.log(`--------Bubble Sort--------`);
// let arr = [1,4,3,2,9,10,888,999,888];
// let n = arr.length;
// console.log(`Before Sorting arr => ${arr}`);
// for(let i=0;i<n-1;i++)
// {
//      let swap = false;
//     for(let j=0;j<n-i-1;j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         swap = true; 
//         }
//     }
//     if(!swap) // Array is Already Sorted
//    {
//        break;
//     }
// }
// console.log(`After Sorting arr => ${arr}`);




//Selection Sort
// console.log(`--------Selection Sort--------`);
// let arr = [1,4,3,2,9,10];
// console.log(`Before Sorting arr => ${arr}`);
// for(let i=0;i<arr.length-1;i++)
// {
//     let small = i;
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[small]>arr[j])
//         {
//             small = j;
//         }
//     }
//     if(i!=small)
//     {
//         let temp = arr[i];
//         arr[i] = arr[small];
//         arr[small] = temp;
//     }
// }
// console.log(`After Sorting arr => ${arr}`);


//Insertion Sorting
console.log(`--------Insertion Sort--------`);
let arr = [1,9,12,11,22,6,8];
console.log(`Before Sorting arr => ${arr}`);
for(let i=1;i<arr.length;i++)
    {
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key)
        {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    } 
    console.log(`After Sorting arr => ${arr}`);


