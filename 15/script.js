//string

//string are immutable
let s = "kunal";
s[3] = 'x';
console.log(s);
//string predefind methods
// console.log(s.length);
// console.log(s.substring(3));
// console.log(s.substring(0,5));
// console.log(s.slice(3));
// console.log(s.slice(0,5));
// console.log(s.slice(-4,-1));
//  console.log(s.toUpperCase());
//  console.log(s.toLowerCase());
//  console.log(s.concat("jlajlfjslaj"));
//  console.log(s.includes('k'));
//  console.log(s.indexOf('k'));
 //aceepst a string from user and print each charachter to each line.

 let prompt = require('prompt-sync')();
 let str = prompt("Enter a string");
 let reverse = "";
   for(let i=0;i<str.length;i++)
    {
        console.log(str[i]);
    }
    //reverse
 for(let i=str.length-1;i>=0;i--)
 {
    reverse +=str[i];
 }
 console.log(reverse);
 //palindrome
 if(str===reverse)
 {
    console.log("palindrom");
    
 }
 else{
        console.log(" not palindrom");

 }