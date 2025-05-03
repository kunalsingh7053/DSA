//sum of give number 182 = > 11
let sum = 0;
let rem;
let n = 182;
// while(n>0)
// {
// rem = n%10;
// sum += rem;
// n = Math.floor(n/10);

// }
// console.log(sum);

let rev =0;
while(n>0)
{
    rem = n%10;
    rev = rev*10+rem;
    n  = Math.floor(n/10);
}
console.log('result');

console.log(rev);



//find autoporhic number
//defination+>An automorphic number is a natural number where its square ends in the same digits as the number itself. For example, 5² = 25, and 6² = 36. 
let num = 4;
let copy = num;
let sqr = num*num;
let count = 0;
while(num>0)
{
    count++;
    num = Math.floor(num/10);
       
}
if(sqr%Math.floor(10,count)===copy)
{
    console.log("Automorphic Number");
    
}
else {
    console.log("Not Automorphic Number");
    
}

