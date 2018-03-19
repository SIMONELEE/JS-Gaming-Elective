// JavaScript Document
//HAVE THE CALSSES ON TOP OF DOCUMENT

class Dice {
 //CONSTRUCTOR TO WORK WITH THE PROPERTIES LATER IN THE CLASS
	//THIS IS JUST DEFINING WHAT THE DICE IS. (NAME SHOULD BE ID - AS IT IS THE ID OF THE DICE)
	//ONLY ONE DICE AND THEN PASS ON THE VALUES 
	constructor(name) {
		this.name = name;
		this.face = 0;
	}

	rollDice() {
		this.face = Math.ceil((Math.random()) * 6); // returning whole number between 1 - 6
		console.log(this.name + ': ' + this.face);
		// printing the result
		document.getElementById(this.name).innerHTML = this.face;
	}

	get result() {
			return this.face;
		}
		// END class Dice
}

class Player {
//WHEN INITIALIZING YOU NEED TO SET THE START VALUES (EMPTY)
	constructor() {
		this.name = '';
		this.diceResult = 0;
		this.score = 0;
	}
	
	//THE ENTIRE NAMING ROUTINE IF STORED LOCALLY 
	playerName() { 
		// prepare client storage for user + score if doesn't exist
		if (!localStorage.getItem('user')) {
			localStorage.setItem('user', '');
			localStorage.setItem('userScore', 0);
		}
		// prompt for user name if not yet set
		if (localStorage.getItem('user') === '') {
			this.name = prompt("Please enter your name", "Mr. X");
			// set username
			localStorage.setItem('user', this.name);
		}
		// get player name from local storage
		var playername = localStorage.getItem('user');
		this.name = playername;
		this.score = localStorage.getItem('userScore');
		alert('Hi ' + this.name + ', your all-time score is ' + this.score + '.  Ready to roll?');
		document.getElementById("pName").innerHTML = this.name;
		document.getElementById("pScore").innerHTML = this.score;
	}

	//PLAYER ROLLING DICE
	//A PLAYER IS INITIALIZED AND ROLLS THE DICE
	//THE ROLLDICES HAS THE ARGUMENTS THAT IT WILL NEED TO ROLL
	rollDices(id1, id2, output) {
		//CREATING DICE 1
		let dice1 = new Dice(id1); //LET = THIS IS ONLY USED WITHIN THE ROLLDICES FUNCTION. 
		dice1.rollDice();

		//CREATING DICE 2
		let dice2 = new Dice(id2);
		dice2.rollDice();

		this.diceResult = dice1.result + dice2.result;
		document.getElementById(output).innerHTML = this.diceResult;
	}

	//GET THE ACCUMULATED RESULT
	get result() {
			return this.diceResult;
		}
		// END class Player
}

/////////////////
// GAME LOGIC //
////////////////

//MODULARIZED CODE
function gameLoop() {
	'use strict';

	document.getElementById('playAgain').addEventListener('click', playAgain);
	document.getElementById('clearData').addEventListener('click', clearData);

	//CREATE NEW HUMAN PLAYER
	var player1 = new Player();
	player1.playerName(); //NEED NAMING ROUTINE, BECUASE IT'S A HUMAN
	player1.rollDices('dice1', 'dice2', 'pResult'); //THE ROLLDICES PLAYER WITH THE ARGUMENTS FROM THE CONSTRUCTOR
	//THE STRINGS INSIDE ARE THE NAMES OF THE NEW DICES AND THEY CORRESPONDS TO THE HTML DOCUMENT AND ARE PASSED ON 

	//CREATE COMPUTER PLAYER
	var computer = new Player();
	computer.rollDices('dice3', 'dice4', 'cResult');
	//THE STRINGS INSIDE ARE THE NAMES OF THE NEW DICES AND THEY CORRESPONDS TO THE HTML DOCUMENT AND ARE PASSED ON 

	compare();

	function compare() {
		if (player1.result < computer.result) {
			computer.score++;
			document.getElementById("winLoose").innerHTML = 'You loose!';
			document.getElementById("cScore").innerHTML = computer.score;
		} else if (player1.result > computer.result) {
			player1.score++;
			document.getElementById("winLoose").innerHTML = 'Nice one!';
			document.getElementById("pScore").innerHTML = player1.score;
			localStorage.setItem('userScore', player1.score);
			console.log('Score: ' + player1.score);
		} else {
			document.getElementById("winLoose").innerHTML = 'Draw...';
		}
	}

	function playAgain() {
		//THE OBJECTS YOU ALREADY HAS CREATED AND THEN THEY NEED TO ROLL DICE AGAIN AND A NEW COMPARE
		player1.rollDices('dice1', 'dice2', 'pResult'); 
		computer.rollDices('dice3', 'dice4', 'cResult');
		compare();
	}

	function clearData() {
		alert('Do you really want to clear ALL data?'); //MAKE SURE OF PROPER USER FEEDBACK
		localStorage.clear();
		location.reload(); //RELOAD THE PAGE 
		// Clear all keys
		// store.clearAll();
	}

}

gameLoop(); //ALL THE INSIDES BESIDES THE CLASSES