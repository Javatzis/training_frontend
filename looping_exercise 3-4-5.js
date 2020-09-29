
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for(i=0;i<=10;i++){
    console.log(i +" * "+9+" = "+i*9)
}


// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for(i=1;i<=10;i++){
    //console.log("Number " +i);
    for (j=1;j<=10;j++){
      console.log(i +" * "+j+" = "+i*j)
    }
      
  }

//   Write  a  JavaScript  program  which  iterates  the integers from 1 to 100. 
//   But for multiples of three print  "Fizz"  instead  of  the  number  and  for  the multiples 
//   of five print "Buzz". For numbers which are  multiples  of  both  three  and  five  print "FizzBuzz".

  for(i=1;i<=100;i++){
    if ( i%3=== 0 && i%5 === 0)
      console.log("FizzBuzz")
    else if(i%3 === 0)
      console.log("Fizz")
    else if(i%5 === 0)
      console.log("Buzz")
    else console.log(i)
    
      
  }