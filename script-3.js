//PLEASE CALCULATE YOUR MONTHLY TAX BELOW :
let monthly_salary= 2000
//erase //PLEASE CALCULATE YOUR MONTHLY TAX BELOW : 
// type a number e.g let monthly_salary=2000
 // use node script-3.js to verify
if(monthly_salary>0 && monthly_salary <=24000 )
{
   console.log(monthly_salary * 0.1 + " kenyan shillings")
}
else if(monthly_salary>24000 && monthly_salary<=32333)
{
 console.log(monthly_salary * 0.25 + " kenyan shillings")
}
else if(monthly_salary>32333&& monthly_salary<=500000 )
{
console.log(monthly_salary * 0.3 + " kenyan shillings")
}
else if(monthly_salary>500000 && monthly_salary<=800000 )
{
console.log(monthly_salary * 0.325 + " kenyan shillings")
}
else if(monthly_salary>800000 )
{
console.log(monthly_salary*0.35 + " kenyan shillings")
}
else if( monthly_salary != "number")
{

   console.log( "please enter a number.")
}

// PLEASE CALCULATE YOUR ANNUAL TAX BELOW 
let annual_salary= 800000 

// type a number e.g let monthly_salary=200000
 // use node script-3.js to verify
if(annual_salary>0 && annual_salary <=288000 )
{
   console.log(annual_salary * 0.1 + " kenyan shillings")
}
else if(annual_salary>288000 && annual_salary<=388000)
{
 console.log(annual_salary* 0.25 + " kenyan shillings")
}
else if(annual_salary>388000 && annual_salary<=6000000 )
{
console.log(annual_salary* 0.3 + " kenyan shillings")
}
else if(annual_salary>6000000 && annual_salary<=9600000 )
{
console.log(annual_salary * 0.325 + " kenyan shillings")
}
else if(annual_salary>9600000 )
{
console.log(annual_salary*0.35 + " kenyan shillings")
}
else if( annual_salary != "number")
{

   console.log( "please enter a number.")
}


