// JavaScript Document

//Scope: Global Variable
	var number1 = 1;
	var number2 = 11;
	var output = document.getElementById('output');
	var trigger = document.getElementById('trigger');
	
	//Regular function with return value:
	function calculate(){
		'use strict';
		var result = number1 + number2; //local variable 
		return result;
		
	}
	
	console.log(calculate()); //when giving the result, it's important to have the () of the method. Otherwise it will output the entire function and not the result 
	
	//ECMA6 arrow function 
	//you will have () for arguments, even if its empty 
	var result = () => number1 + number2;//no conflict with variable names, as this is a global variable 
	//with multiple statement you need to include the function body {} but one statement doesn't need it. 
	//it is a variable, but it is serving as a function and therefore we need the () in the console log.
	console.log(result());
	
	
	//FUNCTION WITH USER INPUT
	function userInput(){
		'use strict';
		let number1 = parseInt(prompt('Type a number: ', '')); //prompt is how to get user input. Reveser from the alertbox, that is a window message from the code
		let number2 = parseInt(prompt('Type a number: ', ''));
		let result = number1 + number2;
		
		output.innerHTML = 'Result is: ' + result;
	}
	
	
	userInput();

//Constructor function

function player (name, score){
	//constructor
	'use strict';
	this.name = name; //
	this.score = score;
	
	//method
	this.greeting = function (){
		alert('Hello ' + this.name + '. Your score is: ' + this.score);
	}
}

var myPlayer = new player('Bente', 184);
myPlayer.greeting();


//Multidimentional Array using literal notation
var playerScore = [
	['Leslie', 30],
	['Ben', 250],
	['Anne', 10],
	['Tom', 70],
];

playerScore.push(['Dana', 80]); //because it's a multidimentional array, we need to add a new player with score as an array to the array 

console.log(playerScore);

//Output the players with theur scores
function listPlayers(){
	'use strict';
	for(var i=0; i<playerScore.length; i++){
		output.innerHTML += playerScore[i] + '<br>';
		
	}
}

trigger.addEventListener('click', listPlayers);


