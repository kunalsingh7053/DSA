//Right Angle Triangle
var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('How many more times? ');
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write('*');
    }
    console.log();
    
}
console.log('-------------------');

for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(j+" ");
    }
    console.log();
    
}
console.log('-------------------');

for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(String.fromCharCode(64 + j) + " ");
    }
    console.log();
    
}
console.log('-------------------');

//Inverted Right Angle Triangle
let temp = 5;
for(let i=1;i<=5;i++)
    {
        for(let j=1;j<=temp;j++)
        {
            process.stdout.write('*');
        }
      temp--;
        console.log();
        
    }
    console.log('-------------------');
    

var prompt = require('prompt-sync')();
//
// get input from the user.
//
var m = prompt('How many more times? ');
for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=m-i+1;j++)
        {
            process.stdout.write('*');
        }
      
        console.log();
        
    }
    console.log('-------------------');

for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=m-i+1;j++)
        {
            process.stdout.write(j+'');
        }
      
        console.log();
        
    }
    console.log('-------------------');
for(let i=1;i<=n;i++)
    {
        let temp =65;
        for(let j=1;j<=m-i+1;j++)
        {
            process.stdout.write(String.fromCharCode(temp)+'');
            temp++;
        }
      
        console.log();
        
    }
    console.log('-------------------');
