//find leep year--------------
function leep(year)
{
     if(year%4==0)
     {
        if(year%100==0)
        {
            if(year%400==0)
            {
            console.log(year+" This is leep year");
            
            }
            else{
                console.log(year+" Not leep year");
                
            }
        }
        else{
            console.log(year+" This is leep year");
            
        }
     }
     else{
        console.log(year+" Not leep year");
        
     }
}
console.log("result");

leep(1700);
//-------------------------


//shop discount
// Amoutn | Discount
/* 0-5000  | 0%
   5001-7000 |5%
   7001-9000 | 10%
   more than 9000|20%
*/ 
function discount(amount)
{
    let dis = 0
    if(amount>=0 && amount<=5000)dis=0;
    else if(amount>=5001 && amount<=7000)dis=5;
    else if(amount>=7001 && amount<=9000)dis = 10;
    else if(amount>=9000)dis = 20;
    else console.log("Invalid Input"); 
    
    console.log(amount - (amount*dis)/100);
    
}
discount(8000);
//-------------------

//bijli bill
// Unit      || Price
/*up to 100  ||rs.4.2/unit
101 - 200    ||rs.6/unit
201 - 400   ||rs.8/unit
more than 400     ||rs.13/unit*/
function bill(unit)
{
   
    let amount = 0;
    if(unit>0 && unit<=100)
    {
        amount = unit*4.2;
    }
    else if(unit>100 && unit<=200)
    {
        amount = (100*4.2) + (unit-100)*6;
    }
    else if(unit>200 && unit<=400)
    {
        amount = (100*4.2)+(100*6)+(unit-200)*8;
    }
    else if(unit>=400)
    {
        amount = (100*4.2)+(100*6)+(200*8)+(unit-400)*13;

    }
    return amount;
}
console.log(bill(700));
function gill(unit)
{
    let amount = 0;
    if(unit> 400)
    {
        amount = (unit - 400) * 13;
        unit = 400
    }
    if(unit> 200 && unit<= 400)
    {
   amount = amount + (unit - 200)*8;
   unit = 200
    }
    if(unit> 100 && unit<= 200)
    {
        amount = amount + (unit - 100) * 6;
        unit = 100
    }
    amount = amount + (unit*4.2);
    return amount;
}
console.log(gill(700));

