// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
// it will check if the current number is odd or even, and display a message to the screen. 

for(i=0;i<=15;i++){
  if (i%2 === 0)
    console.log(i +" is even");
  else if (i%2 === 1)
    console.log(i + " is odd");
    }



    // Rewrite the following code segment using a while
    // loop, do while loop
    // sum = 0;
    // for (x = 1; x <= 10; x++) {
    // sum += Math.pow(x,2);
    // }
sum = 0;
x = 0 
do{
  x++;
  sum += Math.pow(x,2);
} while(x<10); 
