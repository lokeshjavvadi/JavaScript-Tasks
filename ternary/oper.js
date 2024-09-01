var a= prompt("enter age for admission fee");
var result = a<5? "the admission fee is Free" : (a>=5 && a<=12? "the admission fee is $10"  :"the admission fee is $20 Fee"  );
 console.log(result);

// ------------------------------------------------------------------------------------------------

//task 2

//------------------------------------------------------------------------------------------------


var b = prompt("enter time in hour only");
var result2 = b>=5 && b<12 ?" Good Morning" : (b>=12 && b<18) ? "Good AfterNoon" : (b>=18 && b<22) ? "Good Evening" : b<5 && ( b>=22 && b<=24)? "good Night" : "enter 1 to 24 only";
console.log(result2);

//--------------------------------------------------------------------------
//task 3
//--------------------------------------------------------------------------

var c= prompt("enter any number i will tell it is +ve or -ve or zero");
var  result3 = c>0 ? " Positive Number" : c<0 ? " Negative Number ":" You Entered Zero";
console.log(result3);