//OnLINE LIBRARY ---------------------------------------------------
var membership=prompt(' మీ సభ్యత్వ స్థాయిని నమోదు చేయండి. Basic Membership or Standard Membership or Premium Membership');
if (membership == "Basic Membership"){
    console.log("Access to only free books.");
}
else if (membership == "Standard Membership"){
    console.log(" Access to free books and discounted paid books.");
}
else if (membership == "Premium Membership"){
    console.log("Access to all books, including exclusive content.");
}
else{
    console.log("you dont have any membership  or invalid");
}

//-----------------------------------------------------------

//2. Scenario: E-Commerce Discount Application

//-----------------------------------------------------------

var membership2= "VIP";
var amnt_purchased= 120;
if (membership2=="VIP"){
    if(amnt_purchased<100 && amnt_purchased>0) console.log("pay",0.9*amnt_purchased);
    else if (amnt_purchased>=100 && amnt_purchased<=500) console.log("pay",0.85*amnt_purchased);
    else if(amnt_purchased>500) console.log("pay",0.8*amnt_purchased);
    else console.log("Enter valid number bhayya");
}
else if(membership=="Regular"){
    if(amnt_purchased<100 && amnt_purchased>0) console.log("pay"+amnt_purchased +"No discount");
    else if (amnt_purchased>=100 && amnt_purchased<=500) console.log("pay",0.95*amnt_purchased);
    else if(amnt_purchased>500) console.log(0.9*amnt_purchased);
    else console.log("Enter valid number bhayya");

}
else console.log("Regular and VIP Values only accepted");

// ------------------------------------------------------------------

//3. Scenario: Academic Scholarship Eligibility

//----------------------------------------------------------------

var CGPA=3.5;
var activities=2;
var c_s_hrs=200;
if (CGPA>=3.5) console.log("Merit-Based Scholarship");
else if(CGPA>=3 && activities>2) console.log("Leadership Scholarship");
else if(CGPA>=2.5 && c_s_hrs>=100 ) console.log("Community Service Scholarship");
else console.log("Not Eligible");

//--------------------------------------------------------------------------------------------

//4. Scenario: Movie Ticket Pricing

//-------------------------------------------------------------------

var week= "MONDAY";
var age=21;
if (age>=65 || (age<12 && age>0)) {
    if (week == "MONDAY" || week == "TUESDAY" || week == "WEDNESDAY"|| week == "THURSDAY" || week == "FRIDAY" ){
        console.log("the cost is $",0.5*12);
    }
    else if (week == "SATURDAY" || week == "SUNDAY") console.log("the cost is $",0.7*12);
    else console.log("enter days of a week in capital letters only");
}

else if(!(age <0)) console.log("pay $12 no discount");

else console.log("age not negative enter +ve number");


//----------------------------------------------------------------------------------------

// Scenario: Event Registration Validation

//------------------------------------------------------------------------------------

var u_age=19;
var no_for_part=100;
var email="lovely@gmail.com";
let atSymbolPosition = email.indexOf('@');
let dotSymbolPosition = email.lastIndexOf('.');

if ( u_age>18 && no_for_part<=100){
    if ((atSymbolPosition < 1 || dotSymbolPosition <= atSymbolPosition + 1 || dotSymbolPosition === email.length - 1)) console.log("Failed ");
    else console.log("Successfully Registered");
}
else console.log("Unsuccessful");


//---------------------------------------------------------------------------------------------------------------------------

//6.Scenario: Tea Stall Customer Order Processing

//----------------------------------------------------------------------------------------------------------------------------
var tea_type="REGULAR";
var add_on="MILK";
var cost;

if (tea_type=="REGULAR")  cost=15;
else if (tea_type=="GINGER") cost=20;
else if (tea_type=="MASALA") cost=25;
else cost=0;

if (cost!=0){
if (add_on=="MILK") cost=cost+5;
else if(add_on=="SUGAR") cost=cost+2.5;
else cost=cost+0;
console.log("Overall TEa cost is ",cost);
}
else console.log("No that kind of tea available");


