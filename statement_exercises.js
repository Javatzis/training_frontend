//Write an app that accept two integers and display the larger 

var firstInteger = prompt("Enter the first integer");

var secondInteger = prompt("Enter the second integer");

Number(firstInteger) > Number(secondInteger) ? console.log(firstInteger + " is the larger one"):
console.log(secondInteger + " is the larger one");


//Write a javascript app that takes 1 argument, a language code (e.g. "es", "de", "en") and 
//consoles "Hello, World" for the given language, for at least 3 languages. It should default to returning English. 
//Call that function for each of the supported languages and log the result to make sure it works.

var langCode = prompt("Enter the language code");

switch(langCode){
  case "es":
    console.log("Aloha!");
    break;
  case "de":
    console.log("Hallo in German");
    break;
  case "gr":
    console.log("Άντε Γεια!");
    break;
  default:
    console.log("Hello");
    
}


  // Write a javascript app that takes 1 argument, a number score. console logs a grade for the score, 
// either "A", "B", "C", "D", or "F". 

var numberScore = prompt("Enter the number score");


if (numberScore>90)
    console.log("A")
  else if (numberScore>80)
    console.log("B")
  else if (numberScore>80)
    console.log("C")
  else if (numberScore>70)
    console.log("D")
  else if (numberScore>60)
    console.log("F")

