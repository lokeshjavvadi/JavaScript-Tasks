//Task 1: Print Numbers from 1 to 10
//Write a for loop that prints all the numbers from 1 to 10, each on a new line.
for (var i=1 ; i<=10;i++){
    console.log(i)
}

//Task 2: Print Multiplication Table
//Create a for loop that prints the multiplication table for the number 5, 
//from 1 to 10. For example, it should print 5 x 1 = 5, 5 x 2 = 10, and so on up to 5 x 10 = 50.

for (var i=1 ; i<=10 ; i++){
    console.log("5 x " + i + "= "+(5*i) )
}

//Task 3: Sum of First 10 Natural Numbers
//Use a for loop to calculate and print the sum of the first 10 natural numbers (1 to 10).
var sum=0;
for (var i=1 ; i<=10 ; i++){
    sum=sum+i;
}
console.log("sum of 1 to 10 is "+sum);

//Task 4: Print Numbers Divisible by 3 from 1 to 30
//Create a for loop that prints all numbers between 1 and 30 that are divisible by 3.
for (var i=3 ; i<=30 ; i=i+3){
    console.log(i);
}

//Task 5: Print Square of Numbers from 1 to 10
//Write a for loop that prints the square of each number from 1 to 10. 
//For example, it should print 1 squared is 1, 2 squared is 4, and so on up to 10 squared is 100.
for (var i=1 ; i<=10 ; i++){
    console.log(i + " Squared is "+i**2);
}