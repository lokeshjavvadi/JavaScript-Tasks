

//Create a function isLeapYear that takes a year as an argument and returns true
// if the year is a leap year, and false otherwise.
function isLeapYear(year){return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));}
console.log(isLeapYear(2020));

//Task: Write a function isPositive that takes a number as an argument and returns true 
//if the number is positive, and false if it is negative.
function isPositive(num){   if(num>=0) return true;
                             return false;}
console.log(isPositive(-3));

//Create a function isDivisibleBy3And5 that takes a number as an argument and returns true 
//if the number is divisible by both 3 and 5, and false otherwise.
function isDivisibleBy3And5(num){   if (num%5==0 && num%3==0) return true;
                                     return false;}
console.log(isDivisibleBy3And5(-15));

//Write a function isVowel that takes a character as an argument and
// returns true if the character is a vowel, and false if it is a consonant.
var vowels="aeiouAEIOU"
function isVowel(char){    for(var i=0;i<vowels.length;i++){
                           if (char == vowels[i]) return true; }
                           return false;
}
console.log(isVowel("h"));

//Write a function isUppercase that takes a character as an argument and
// returns true if the character is uppercase, and false if it is lowercase.
var upper="QWERTYUIOPLKJHGFDSAZXCVBNM"
function isUppercase(char){   for(var i=0;i<upper.length;i++){
                               if(char==upper[i]) return true;   }
                               return false;}
console.log(isUppercase("k"));
