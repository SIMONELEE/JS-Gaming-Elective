localStorage.setItem('player', prompt('Hello player. Please enter your name: ', ''));
var playerName = localStorage.getItem('player');
document.getElementById('player-name').innerHTML = playerName;

//var computerScore = localStorage.getItem('comScore');
//localStorage.setItem('comScore', computerScore);

//var playerScore = localStorage.getItem('playScore');
//localStorage.setItem('playScore', playerScore);

var computerScore = 0;
var playerScore = 0;

var reset = document.getElementById('reset');
var playAgain = document.getElementById('play-again');

var playerResult, result;


class Dice {
	constructor(die, die2){
		this.die = die;
		this.die2 = die2;
	}
	
	rollDice(){
		this.die = (Math.floor(Math.random()*6)+1);
		this.die2 = (Math.floor(Math.random()*6)+1);
		//console.log('Random number x : ' + d);
		
		console.log('Computer rolled: ' + this.die + ' and ' + this.die2);
		document.getElementById('computer-dice-1').innerHTML = 'Dice 1 = ' + this.die; 
		document.getElementById('computer-dice-2').innerHTML = 'Dice 2 = ' + this.die2;
	}
	
	calculate(){
		'use strict';
		result = parseInt(this.die + this.die2); 
		console.log('Computer result is: ' + result);
		document.getElementById('computer-result').innerHTML = 'Computer result is = ' + result;
	}
} //END CLASS DICE


class Player extends Dice {
	constructor(){
		super();
	}
	
	rollDice(){
		//super.rollDice();
		this.die = (Math.floor(Math.random()*6)+1);
		this.die2 = (Math.floor(Math.random()*6)+1);
		
		console.log('You rolled: ' + this.die + ' and ' + this.die2);
		document.getElementById('player-dice-1').innerHTML = 'Dice 1 = ' + this.die; 
		document.getElementById('player-dice-2').innerHTML = 'Dice 2 = ' + this.die2;
	}
	
	calculate(){
		//super.calculate();
		playerResult = parseInt(this.die + this.die2); 
		console.log('Your result is: ' + playerResult);
		document.getElementById('player-result').innerHTML = 'Your result is = ' + playerResult;
	}
	
} //END CLASS PLAYER



function Compare(){
	'use strict';
	if(result === playerResult){
		console.log("It's a draw!");
		document.getElementById('result').innerHTML = "It's a draw!";
	}
	else if (result>playerResult){
		//console.log("You loose!");
		computerScore++;
		document.getElementById('result').innerHTML = "You loose!";
		document.getElementById('computer-score').innerHTML = computerScore; 
	}
	else if (result<playerResult){
		//console.log("You win!");
		playerScore++;
		document.getElementById('result').innerHTML = "You win!";
		//document.getElementById('player-score').innerHTML = playerScore;
		document.getElementById('player-score').innerHTML = playerScore; 
	}
}



function newGame(){
	'use strict';
	var Games = new Dice();
	Games.rollDice();
	Games.calculate();

	var Playing = new Player();
	Playing.rollDice();
	Playing.calculate();
	
	Compare();
}

function resetGame(){
	'use strict';
	localStorage.clear();
	location.reload();
}





//console.log("You rolled a "+ this.die);


/*function dices(){
	'use strict';
		var d = (Math.floor(Math.random()*6));
	console.log('Random number x : ' + d);
	
}

dices();*/

var Games = new Dice();
Games.rollDice();
Games.calculate();

var Playing = new Player();
Playing.rollDice();
Playing.calculate();


Compare();

console.log(playerName);

playAgain.addEventListener('click', newGame);
reset.addEventListener('click', resetGame);

/*

	rollDie(){
		(Math.floor(Math.random()*6));
	} 
*/