// HW 3 Part 2
/*
// Rock, Paper Scissors
var choice = prompt("Enter rock, paper or scissors", "rock, paper or scissors");
// where to capture user choice?


var compChoice = Math.random();
//console.log(compChoice);

var rock = "rock";
var paper = "paper";
var scissors = "scissors";

function getCompChoice() {
    if (compChoice <= .32) {
        return "rock";
    } else if (compChoice <= .65) {
        return "paper";
    } else if (compChoice <=1) {
        return "scissors";
    }
}
var compThrow = getCompChoice()
//console.log(getCompChoice());

function match() {
    // user selection = rock
    //console.log(choice + "-----" + compThrow);
    if (choice == rock && compThrow == rock) {
        //console.log(choice + "rrrrr");
        return "You both chose rock. Try again!";
    } else if (choice == rock && compThrow == paper) {
         //console.log(choice + "pppppp");
        return "You chose rock and the computer chose paper. Computer wins!";
    } else if (choice == rock && compThrow == scissors) {
         //console.log(choice + "ssss");
        return "You chose rock and the computer chose scissors. You win!";
    // user selection = paper
    } else if (choice == paper && compThrow == rock) {
        return "You chose paper and the computer chose rock. You win!";
    } else if  (choice == paper && compThrow == paper) {
        return "You chose paper and the computer chose paper. Try again!";
    } else if (choice == paper && compThrow == scissors) {
        return "You chose paper and the computer chose scissors. Computer wins!";
    // user selection = scissors
    } else if (choice == scissors && compThrow == rock) {
        return "You chose scissors and the computer chose rock. Computer wins!";
    } else if (choice == scissors && compThrow == paper) {
        return "You chose scissors and the computer chose paper. You win!";
    } else if (choice == scissors && compThrow == scissors) {
        return "You chose scissors and the computer chose scissors. Try again!";
    }
    
}

alert(match());


// calculator

var num1 = Number(prompt("Enter a number"));
var num2 = Number(prompt("Enter a second number"));
var operation = prompt("Choose an operation: +, -, * or /");

//var num1 = parseInt(num1);
//var num2 = parseInt(num2);


function calculate() {
    if (operation == "+") {
        alert("Your equation equals " + parseInt(num1 + num2));
    } else if (operation == "-") {
        alert("Your equation equals " + parseInt(num1 - num2));
    } else if (operation == "*") {
        alert("Your equation equals " + parseInt(num1 * num2));
    } else if (operation == "/") {
        alert("Your equation equals " + parseInt(num1 / num2));
    } else {
        alert("Please enter a valid entry");
    }

};

calculate();

// DEATH BY JAVASCRIPT - Part 1
// make variable for user input word
var alphaMe = prompt("Enter a word for the cmputer to alphabetize");

// make fxn to handle string: split, sort - which alphabetizes - join and trim whitespace
function alphabetize(str) {
    return str.split('').sort().join('').trim();
}
console.log(alphabetize(alphaMe));


// DEATH BY JAVASCRIPT - Part 2
var capMe = prompt("Write a phrase. Do not capitalize the first letter.");
var aWord;
// 1) break up into words DONE
// 2) identify first letter of each word 
// 3) capitalizes them
function getWord(str) {
   //return str.match(/\w+\s?/g); WORKS for step 1
   var aWord = str.match(/\w+\s?/g); 
    
};
console.log(aWord);
    
 //   for (i=0; i < aWord.length; i++) {
 //      console.log(aWord.toUpperCase[0]);
 //   }  
//}

//console.log(str.charAt(0).toUpperCase()); 
//console.log(capitalize(capMe));
            
         
       
// DEATH BY JAVASCRIPT - Part 3
// DEATH BY JAVASCRIPT - Part 4

function makeid() {
    
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++)
        
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

console.log(makeid());

*/    
// DEATH BY JAVASCRIPT - Part 5
function Longest_Country_Name(country_name)  
  {  
  return country_name.reduce(function(lname, country)   
  {  
    return lname.length > country.length ? lname : country;  
  },   
"");  
}  
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"])); 






            
            
            
            
            
            