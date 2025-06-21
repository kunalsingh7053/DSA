//palindrom string using two pointer algorithm.
// let prompt = require('prompt-sync')();
// let str = prompt(" Enter A String:-");
// let ispalindrom  = true;
// let i = 0,j=str.length-1;
// while(i<j)
// {
//     if(str[i]!=str[j])
//     {
//         ispalindrom = false;
//         break;
//     }
//     i++;
//     j--;

// }
// if(ispalindrom)
// {
//     console.log("Given String is Palindrom");
    
// }
// else{
//     console.log("Not Palindrom");
    
// }

//Toggle each Alphabet of String.
//First Approach.
// let ans = "";
// for(let i=0;i<str.length;i++)
// {
//     if(str[i]===str[i].toUpperCase())
//     {
//        ans += str[i].toLowerCase();
//     }
//     else{
//         ans += str[i].toUpperCase();
//     }
// }
// console.log(ans);
//Secondd Approach.
// for(let i=0;i<str.length;i++)
// {
//     let asci = str.charCodeAt(i);
//     if(asci>=65 && asci<=90)
//     {
//         ans = ans+String.fromCharCode(asci+32);
//     }
//    else if(asci>=97 && asci<=122)
//     {
//         ans = ans+String.fromCharCode(asci-32);
//     }
// }
// console.log(ans);
//cout prefix and pref.
// let arr = ["pay","attention","practice","attend","p"];
// let pref = "p";
// let count = 0;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i].startsWith(pref)) count++;
  
   
// }
// console.log(count);

//capitilize first and last character of word
let words = "hii i am kunal patel";
let arr = words.split(" ");
let ans = "";
for(let i=0;i<arr.length;i++)
{
     let word  = arr[i];
     if(word.length===1 || word.length===0)
     {
                ans += word.toUpperCase()+" ";

     }
  
     else {
        ans += word.charAt(0).toUpperCase() + word.substring(1,word.length-1) + word.charAt(word.length-1).toUpperCase()+" ";
     }
}
console.log(ans);
