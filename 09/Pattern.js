//Right Angle Triangle
var prompt = require("prompt-sync")();
//
// get input from the user.
//
var n = Number(prompt("How many more times? "));
console.log();

console.log("--- Right Angle Traingle ---");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(64 + j) + " ");
  }
  console.log();
}
console.log("-------------------");
console.log();

//Inverted Right Angle Triangle
console.log("--- Inverted Right Angle Traingle ---");

let temp = 5;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= temp; j++) {
    process.stdout.write("*");
  }
  temp--;
  console.log();
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(j + "");
  }

  console.log();
}

for (let i = 1; i <= n; i++) {
  let temp = 65;
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(String.fromCharCode(temp) + "");
    temp++;
  }

  console.log();
}
console.log("-------------------");
console.log();

//Mirror Right Angle Traingle
console.log("--- Mirror Right Angle Traingle ---");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(64 + j) + " ");
  }
  console.log();
}
console.log("-------------------");
console.log();

//Traingle
console.log("--- Diamond Traingle ---");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(64 + j) + " ");
  }
  console.log();
}
console.log("-------------------");
console.log();

//x partern
console.log("--- X-Patter ---");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j === n + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
console.log();

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j === n + 1) {
      process.stdout.write(j + " ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
console.log();

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j === n + 1) {
      process.stdout.write(String.fromCharCode(64 + j) + " ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
console.log("-------------------");
console.log();

//v pattern
console.log("--- V-Shap-Patter ---");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (i == j || i + j === n * 2) {
      process.stdout.write("* ");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (i == j || i + j === n * 2) {
      process.stdout.write(j + " ");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (i == j || i + j === n * 2) {
      process.stdout.write(String.fromCharCode(64 + j) + " ");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
console.log("-------------------");
console.log();

//Butterfly Patter
console.log();

console.log("--- Butterfly Patter ---");

for (let i = 1; i <= n; i++) {
  let str = "*".repeat(i) + " ".repeat(2 * (n - i)) + "*".repeat(i);
  console.log(str);
}
for (let i = n; i >= 1; i--) {
  let str = "*".repeat(i) + " ".repeat(2 * (n - i)) + "*".repeat(i);
  console.log(str);
}
console.log();
for (let i = 1; i <= n; i++) {
  let str =
    i.toString().repeat(i) + " ".repeat(2 * (n - i)) + i.toString().repeat(i);
  console.log(str);
}
for (let i = n; i >= 1; i--) {
  let str =
    i.toString().repeat(i) + " ".repeat(2 * (n - i)) + i.toString().repeat(i);
  console.log(str);
}
console.log();
for (let i = 1; i <= n; i++) {
  let char = String.fromCharCode(64 + i);
  let str = char.repeat(i) + " ".repeat(2 * (n - i)) + char.repeat(i);
  console.log(str);
}
for (let i = n; i >= 1; i--) {
  let char = String.fromCharCode(64 + i);
  let str = char.repeat(i) + " ".repeat(2 * (n - i)) + char.repeat(i);
  console.log(str);
}
function butterflyPattern(n) {
  // Upper part of the butterfly
  for (let i = 1; i <= n; i++) {
    let str = "";

    // Left stars
    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    // Spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
      str += " ";
    }

    // Right stars
    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    console.log(str);
  }

  // Lower part of the butterfly
  for (let i = n; i >= 1; i--) {
    let str = "";

    // Left stars
    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    // Spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
      str += " ";
    }

    // Right stars
    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    console.log(str);
  }
}

// Example usage
butterflyPattern(n);

console.log("--------------------");

//Name Pattern
console.log("------K--------");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("*");
  }
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("*");
  }

  console.log();
}

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("*");
  }
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("*");
  }

  console.log();
}

console.log();
console.log();
console.log();

console.log("-----------U-------------");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("*");
  }
  if (i == n) {
    for (let j = 1; j < n; j++) {
      process.stdout.write("*");
    }
  } else {
    for (let j = 1; j <= n - 1; j++) {
      process.stdout.write(" ");
    }
  }
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}
console.log();
console.log();
console.log();

console.log("------------------N---------------------");
for (let i = 1; i <= n; i++) {
  if (i == 1) {
    console.log("*");
  }
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("*");
  }
  if (i == 1) {
    for (let j = 1; j < n; j++) {
      process.stdout.write("*");
    }
  } else {
    for (let j = 1; j <= n - 1; j++) {
      process.stdout.write(" ");
    }
  }
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}
console.log();
console.log();
console.log();
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("* ");
  }
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (i == j || i + j === n * 2 || (i == n && j === n + 1)) {
      process.stdout.write("* ");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
console.log();
console.log();
console.log();
console.log("-------------------A------------------");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("* ");
  }
  if (i == 1 || i == Math.ceil(n / 2)) {
    for (let j = 1; j < 5; j++) {
      process.stdout.write("* ");
    }
  } else {
    for (let j = 1; j <= n - 1; j++) {
      process.stdout.write("  ");
    }
  }
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
console.log();
console.log();
console.log();
console.log("-------------------L--------------------");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 1; j++) {
    process.stdout.write("* ");
    if (i == 5) {
      for (let j = 1; j < n; j++) {
        process.stdout.write("* ");
      }
    }
  }

  console.log();
}
