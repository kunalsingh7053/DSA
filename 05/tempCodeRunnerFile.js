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

