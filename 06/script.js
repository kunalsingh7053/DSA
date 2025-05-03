// //Do-while.

// let i = 1;
// do{
//     console.log('hellow world');
//      i++;
// }
// while(i<=5)
//     //Q. Repeat hello
// let input;
// do{
//  console.log("Helow world ");
//  input = prompt("do you want to repeat again yes/no").toLowerCase();
// }while(input === 'yes')

//     //gueass the number
//     let com = Math.floor(Math.random()*(10-1)+1);
//     let user;
//     console.log(com);
//     do{
//     user = prompt("Enter a numbet between 1 To 10");
//     if(isNaN(user) || user<=0 || user>10)
//     {
//         console.log("Please Enter Valid Number");
//         continue;
//     }
//     if(user>com)console.log("To High,Try Again!");
//     else if(user<com)console.log("To Low,Try Again!");
//     else{
//         console.log("Congrates You Match The Number "+user);
        
//     }
    
       
//     }while(user!==com);
    

// //sasta calculator
// let user;
// do{
//  let num1 = Number(prompt("Enter First Number"));
//  let num2 = Number(prompt("Enter Second Number"));
//  let op = prompt("Enter a oprator (+,-,*,/)");
//  switch(op)
//  {
//     case '+':
//         console.log("addition of two num=>"+(num1+num2));
//         break;
//     case '-':
//         console.log("substraction of two num=>"+(num1+num2));
// break;
// case '*':
//     console.log("multi of two num=>"+(num1+num2));
// break;
// case '/':
//     if(num2==0)
//     {
//       console.log("Invalid  Num2 value");
      
//     }
//     else 
//     { 
//         console.log("divide of two num=>"+(num1/num2));
//     }
//     break;
//     default:
//         console.log('Invalid operator');

        
    
        
//  }
//  user = prompt("do you want to repeate (yes/no)").toLowerCase();

// }while(user === 'yes')

//Q.Project restruant
do{
  
    let first = Number(prompt("Enter 1.(MENU) 2.(EXIT)"));
    switch(first)
    {
        case 1:
          do{
               let second = Number(prompt('Enter 1.(MAIN-COURSE) 2.(DESERT)3.(SWEET)4.(EXIT)'));
               switch(second)
               {
                 case 1:
                    
                    
                    console.group('----MAIN-COURSE ----');
                    
                    console.log('1.)Paneer Butter Masala:265');
                    console.log('2).Chana Masala:549');
                    console.log('3).Chole Bhature:485');
                    console.log('4).Daal Makhani:7465');
                    
                    console.group('--------');
                    let thi = prompt('Enter number for order');
                    if(thi>0 && thi<5)
                    {
                        console.log('Order SuccessFull!👌');
                        
                    }
                    else {
                        console.log('Invalid Input');
                        
                    }

                    break ;
                 case 2:
                    
                    
                    console.group('----DESERT----');
                    
                    console.log('1).Pastries:265');
                    console.log('2).Cakes: :549');
                    console.log('3).Puddings:485');
                    
                    console.groupEnd('--------');
                    let four = prompt('Enter number for order');
                    if(four>0 && four<4)
                    {
                        console.log('Order SuccessFull!👌');
                        
                    }
                    else {
                        console.log('Invalid Input');
                        
                    }

                    break ;

                 case 3:
                    
                    
                    console.group('----Sweet----');
                    
                    console.log('1).Gulab jamun:265');
                    console.log('2).Khir: :549');
                    console.log('3).Mava:485');
                    
                    console.groupEnd('--------');
                    let five = prompt('Enter number for order');
                    if(four>0 && four<4)
                    {
                        console.log('Order SuccessFull!👌');
                        
                    }
                    else {
                        console.log('Invalid Input');
                        
                    }
                
                    break ;
case 4:
    window.close();


    default :
    console.log("Invalid Input Number");
    
                    
               }
          }while(true)
        break;
        case 2:
            window.close();


    }
 
    
}
while(true)