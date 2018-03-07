/*GLOBAL VARIABLES*/
localStorage.setItem('player', prompt('Hello player. Please enter your name: ', ''));
var playerName = localStorage.getItem('player');
document.getElementById('player-name').innerHTML = playerName + ':';

//var computerScore = localStorage.getItem('comScore');
//localStorage.setItem('comScore', computerScore);

//var playerScore = localStorage.getItem('playScore');
//localStorage.setItem('playScore', playerScore);

/*I TRIED TO IMPLEMENT THE LOCAL STORAGE, BUT I HAVE NO IDEA HOW IT SHOULD WORK*/

var reset = document.getElementById('reset');
var playAgain = document.getElementById('play-again');
var compareResult = document.getElementById('result');

var computerScore = 0;
var playerScore = 0;

var playerResult, result;


/*CLASSES*/

class Dice {
	constructor(die, die2){
		this.die = die;
		this.die2 = die2;
	}
	
	rollDice(){
		this.die = (Math.floor(Math.random()*6)+1);
		this.die2 = (Math.floor(Math.random()*6)+1);
		//console.log('Random number x : ' + d);
		
		//console.log('Computer rolled: ' + this.die + ' and ' + this.die2);
		document.getElementById('computer-dice-1').innerHTML = 'Dice 1 = ' + this.die; 
		document.getElementById('computer-dice-2').innerHTML = 'Dice 2 = ' + this.die2;
	}
	
	calculate(){
		'use strict';
		result = parseInt(this.die + this.die2); 
		//console.log('Computer result is: ' + result);
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
		
		//console.log('You rolled: ' + this.die + ' and ' + this.die2);
		document.getElementById('player-dice-1').innerHTML = 'Dice 1 = ' + this.die; 
		document.getElementById('player-dice-2').innerHTML = 'Dice 2 = ' + this.die2;
	}
	
	calculate(){
		//super.calculate();
		playerResult = parseInt(this.die + this.die2); 
		//console.log('Your result is: ' + playerResult);
		document.getElementById('player-result').innerHTML = 'Your result is = ' + playerResult;
	}
	
} //END CLASS PLAYER

/*FUNCTIONS*/

//FUNCTION TO COMPARE THE DICE RESULTS
function Compare(){
	'use strict';
	if(result === playerResult){
		//console.log("It's a draw!");
		compareResult.innerHTML = "It's a draw!";
	}
	else if (result>playerResult){
		//console.log("You loose!");
		computerScore++;
		compareResult.innerHTML = "You loose!";
		document.getElementById('computer-score').innerHTML = computerScore; 
	}
	else if (result<playerResult){
		//console.log("You win!");
		playerScore++;
		compareResult.innerHTML = "You win!";
		document.getElementById('player-score').innerHTML = playerScore; 
	}
}

//PLAY AGAIN
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

//RESET THE GAME
function resetGame(){
	'use strict';
	localStorage.clear();
	location.reload();
}


//TESTING LOCAL STORAGE
/*
function storageAvailable(type) {
	'use strict';
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
  console.log('Yippee! We can use localStorage awesomeness');
}
else {
  console.log('Too bad, no localStorage for us');
}
*/

/*PLAY GAME*/

//INITIALIZING A GAME
var Games = new Dice();
Games.rollDice();
Games.calculate();

var Playing = new Player();
Playing.rollDice();
Playing.calculate();

Compare();

//console.log(playerName);

/*BUTTONS*/
playAgain.addEventListener('click', newGame);
reset.addEventListener('click', resetGame);
