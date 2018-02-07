// JavaScript Document

var questions = [							 
		['How many moons does Earth have?', 1],					 
		['How many moons does Saturn have?', 31],
		['How many moons does Venus have?', 0]	
	];

//var message = document.getElementById('message');


function userInput(){
	'use strict';
	//[[Earth, 1] (0 from the overall array, 0 it's the first inside the overall array), [Saturn,31] (0 from the overall array , 1 it's the second inside the overall array), [Venus,0] (0 from the overall array , 2 it's the third inside the overall array)]
	//[0][0] means the first in the overall array and then the first value inside the first array is the question and is therefore = 0
	//[1][0] means the second array inside the overall array and then the question is the first value inside the array itself
	//Saturn answer will be: [1][1] because it's the second in the overall array and then it's the second value inside the array itself
	let number1 = parseInt(prompt(questions[0][0], '')); //prompt is how to get user input. Reveser from the alertbox, that is a window message from the code
	
	if(number1 === questions[0][1]){
		 alert('Correct!');
	}
	else 
	{
		alert('Sorry, Earth has only' + questions[0][1] + ' moon.');
	}

	let number2 = parseInt(prompt(questions[1][0], ''));
	
	if(number2 === questions[1][1]){
	 	alert('Correct!');
	}
	else 
	{
		alert('Sorry, Saturn has ' + questions[1][1] + ' moons.');
	}
	

	let number3 = parseInt(prompt(questions[2][0], ''));
	
	if(number3 === questions[2][1]){
	 	alert('Correct!');
	}
	else 
	{
		alert('Sorry, Venus has ' + questions[2][1] + ' moons.');
	}
}


userInput();

	
	/****************************
	
	Create a quiz based on the array "questions" ['question', correct answer].
	Each question must be presented using the prompt() method, allow user input and provide feedback using alert() - either "Correct!" or "Sorry. The correct answer is [correct number].)
	
	After the quiz is finished the overall result is published: "You got [number of correct answered questions] out of [questions in total] questions correct!"
	
	
	****************************/