var myGame = (function () {

	// private variables

	var playerChoiceDisplay = document.getElementById("player_choice");
	
	var	computerChoiceDisplay = document.getElementById("computer_choice");
	
	var	resultDisplay = document.getElementById("result");
	
	var	computerChoice = '';
	var	userChoice = '';
	
	
	// functions
	var myPrivateFunction;
			
	var computerInput = function (){
		switch(Math.floor(Math.random()*3)){
			case 0:
				this.computerChoice = "Rock"; //THIS IN OBJECT CONTEXT
				break; 
			case 1:
				this.computerChoice = "Paper";
				break;
			case 2:
				this.computerChoice = "Scissors";   
			}
		};
			
		var compare = function(){
		if(this.userChoice === this.computerChoice){
		   this.resultDisplay.innerHTML = 'Game is a draw.';
		   } else if (this.userChoice === 'Paper' && this.computerChoice === 'Rock'){
			this.resultDisplay.innerHTML = 'You win! ';
		} else if (this.userChoice === 'Paper' && this.computerChoice === 'Scissors'){
			this.resultDisplay.innerHTML = 'You lose! ';
		} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Rock'){
			this.resultDisplay.innerHTML = 'You lose! ';
		} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Paper'){
			this.resultDisplay.innerHTML = 'You win! ';
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Paper'){
			this.resultDisplay.innerHTML = 'You lose! ';
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Scissors'){
			this.resultDisplay.innerHTML = 'You win! ';
		} 
	};
	
	var display = function (){
	this.playerChoiceDisplay.innerHTML = this.userChoice;
	this.computerChoiceDisplay.innerHTML = this.computerChoice;
	};
	

	// private functions
	myPrivateFunction = function() {
	
	};
	
	return {
		// public functions
		play: function() {
		//myGame.functionkey(); //MYGAME OBJECT IS CALLED DIRECTLY AND NEEDS TO BE BEFORE THE FUNCTIONS
		myGame.userChoice = this.id; //FUNCTION CONTEXT - REFERS TO THE ELEMENT THAT WAS TRIGGERING THE FUNTION PLAY 
		myGame.computerInput();
		myGame.compare();
		myGame.display();
	}
	};
	
	// gameModule end //
})();

myGame.myPublicFunction();

	var buttons = document.getElementsByClassName("button"); 
	for (var i = 0; i < buttons.length; i++) {
				buttons[i].addEventListener('click', myGame.play);
	}