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
