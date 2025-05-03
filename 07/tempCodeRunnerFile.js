//Right Angle Triangle
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
