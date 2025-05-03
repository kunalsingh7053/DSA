//print n number of hellow
let num = Number(prompt('Enter a number'));
let i;
if(isNaN(num))
{
    console.log("Invalid Input");
    
}
else{
    for(i=0;i<num;i++)
    {
        console.log("Hellow");
        
    }
}
//print n natural number
for(let i=0;i<=num;i++)
{
    console.log(i);
    
}
//factorial 
function fact(num){
    let fact = 1;
    for(let i=1;i<=num;i++)
    {
        fact *=i;
    }
    return fact;
}
console.log(fact(6));

// factors of number
//fist approch
//factors yani us number ko kon kon divide kar sakta hai
//last factors hame given number ke num/2 mai milta hai
//factors find formula
//take number
//number kabhi bhi usse jayada bade number se divide nhi hota hai.
//or hamne ye dekha ki wo number ka half take hi divisible number milte hai usse jayada nhi milte.
function factors(num)
{
    let i;
    for(i=0;i<num/2;i++)
    {
        if(num%i==0)
        {
            console.log(i);
            
        }
    }
    console.log(num);
    
}
factors(13)
//prime number
// First approch
function ifprime(num)
{
   
    for(let i=2;i<num;i++)
    { 
        if(num % i==0)
        {
            return false;
            
        }
        else{
            return true;
            
        }

    }
}
console.log(ifprime(21)
);

//second approch
// prime number using sqrt root
//between 2 or sprt(num)  if any number divisible means that is not prime number
function ifprime(num) {
    if (num <= 0) {
        console.log("Invalid Input");
        return;
    }
    if (num === 2) {
        console.log("Prime Number");
        return;
    }
    if (num % 2 === 0) {
        console.log("Not Prime");
        return;
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            console.log("Not Prime");
            return;
        }
    }
    
    console.log("Prime Number");
}

ifprime(13); // Output: "Prime Number"
ifprime(12); // Output: "Not Prime"
ifprime(-5); // Output: "Invalid Input"
