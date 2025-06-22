//check frequency of characters in string
let prompt = require('prompt-sync')();
// let str = prompt("Enter a String");
//1] First Approach.
// let str = "kuanal";
// let obj = {

// }
// for(let char of str)
// {
//     if(obj[char] == undefined)
//     {
//         obj[char] = 1;
//     }
//     else{
//         obj[char] += 1;
//     }
// }
//     const sortedKeys = Object.keys(obj).sort();
//     const result = sortedKeys.map(key => `${key}: ${obj[key]}`);

//     console.log(result);

//2]  Second Approach.
// let arr = new Array(123).fill(0);
// for(let i=0;i<str.length;i++)
// {
//     let asci = str.charCodeAt(i);
//     arr[asci] = arr[asci]+1;
// }
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>0)
//     {
//         console.log(String.fromCharCode(i)+"-> "+arr[i]);
//     }
// }
//find two string is anagram or not.

let str1 = prompt("Enter  String One ");
let str2 = prompt("Enter  String Two ");
let arr = new Array(123).fill(0);
if(str1.length!=str2.length)
{
    console.log("Not Anagram");
    
}
else{
let isanagram  = true;
    for(let i=0;i<str1.length;i++)
    {
        let asci = str1.charCodeAt(i);
        arr[asci] = arr[asci]+1;
    }
    for(let i=0;i<str2.length;i++)
    {
        let asci = str2.charCodeAt(i);
        arr[asci] = arr[asci]-1;
    }
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!=0)
        {
            isanagram = false;
            break;
        }
    }
    if(isanagram)
    {
        console.log("string is Anagram");
        
    }
    else{
            console.log("Not Anagram");

    }
}