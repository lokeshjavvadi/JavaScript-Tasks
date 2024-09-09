//Task 1: Concatenate Two Strings Without Using Methods
//Description: Manually append the characters of one string to another, 
//character by character, without using any built-in string methods.
var string1="Hello" , string2="World";
for (var i=0; i<=string2.length-1;i++){string1+=string2[i];}
console.log(string1);

//Task 2: Create and Display an Object Manually
//Description: Create an object to store details of a student (name, age, grade).
//Display the student’s details by manually accessing object properties (no methods/functions).
var student={"Name":"Lokesh","Age":21,"Grade":"F"};
for(var i in student){console.log(`${i} : ${student[i]}`)};

//Task 3: Count Occurrences of a Specific Character in a String Without Using Methods
//Description: Manually count the number of occurrences of a specific character in a given string.
var str="ramgopal varma"; var ch="a"; var c=0;
for(var i=0;i<str.length;i++){   if(str[i]==ch) c=c+1;};
console.log(`The Character \"${ch}\" appears ${c} times in ${str} `);

//Task 4: Create an Object and Retrieve Properties Without Methods
//Description: Create an object representing a car (make, model, year, color) 
//and manually retrieve and display the properties.
var car={"Make": "Toyota","Model": "Corolla","Year": 2020,"Color": "Blue"};
for(var i in car){console.log(`${i} : ${car[i]}`)};

//Task 5: Manually Reverse a String
//Description: Write a program to reverse a string character by character 
//without using any built-in string methods or functions.
var input="WERfcvtfreERfgvgvVH" , output="";
for (var i=input.length-1;i>=0;i--){output+=input[i]};  console.log(output);
