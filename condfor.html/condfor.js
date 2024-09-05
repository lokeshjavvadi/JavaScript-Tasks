//Task 1: for...in Loop with an Array
//Create an array of 5 colors: ['red', 'green', 'blue', 'yellow', 'orange'].
//Using a for...in loop, print the index of each element in the array.
var arr=['red', 'green', 'blue', 'yellow', 'orange'];
for (var i in arr){console.log("index of "+arr[i]+"= "+i)}

//Task 2: for...of Loop with an Array
//Create an array of 5 animals: ['cat', 'dog', 'rabbit', 'elephant', 'lion'].
//Using a for...of loop, print the name of each animal in the array.
var arr2=['cat', 'dog', 'rabbit', 'elephant', 'lion'];
for(var j of arr2){console.log(j)}

//Task 3: Sum of Array Elements using a while Loop
//Create an array of numbers [2, 4, 6, 8, 10].
//Using a while loop, calculate and print the sum of the elements in the array.
var arr3=[2, 4, 6, 8, 10]; var sum=0;  var k=0;
while(k<arr3.length){sum=sum+arr3[k];k++;}console.log(sum +" is the sum of array");

//Task 4: Reverse Array using a do...while Loop
//Create an array of 5 numbers: [1, 2, 3, 4, 5].
//Using a do...while loop, print the array elements in reverse order.
var arr4=[1, 2, 3, 4, 5]; var l=arr4.length-1; var s="";
do{ s=s+arr4[l] +" ";
    l--;
}while(l>=0); console.log(s);

//Task 5: Sum of Even Numbers using do...while Loop
//Given an array of numbers [3, 6, 9, 12, 15, 18], 
//use a do...while loop to find the sum of even numbers.
var arr5=[3, 6, 9, 12, 15, 18]; var add=0; var m=0;
do{ if (arr5[m]%2==0) add=add+arr5[m];
    m++;
}while(m<arr5.length);console.log("even numbers sum is ",add);

//Task 6: Reverse the Array using a while Loop
//Create an array ['a', 'b', 'c', 'd', 'e'] and 
//reverse the elements using a while loop without using any built-in array reverse methods.
var arr6= ['a', 'b', 'c', 'd', 'e']; var n=arr6.length-1; var s1=" ";
while(n>=0){ s1=s1+arr6[n]+" ";
   n--;
}console.log(s1)