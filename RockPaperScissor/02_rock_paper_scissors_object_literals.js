// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

//OBJECT
	var myGame = {
		// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
		// Names inside the object may be either strings or identifiers that are followed by a colon.
 		// object literals can contain properties and methods:
		
		//OBJECT PROPERTIES
		playerChoiceDisplay : document.getElementById("player_choice"), 
		computerChoiceDisplay : document.getElementById("computer_choice"),
		resultDisplay : document.getElementById("result"), 
		computerChoice : '',
		userChoice : '',
		
		// a method 
		functionkey: function () {
			'use strict';
		},
		
		computerInput : function (){
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
		}, 
			
		compare : function(){
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
	},
		
	display : function (){
	this.playerChoiceDisplay.innerHTML = this.userChoice;
	this.computerChoiceDisplay.innerHTML = this.computerChoice;
	}
		///// object end /////
	};

//BUTTONS
	var buttons = document.getElementsByClassName("button"); 
	for (var i = 0; i < buttons.length; i++) {
				buttons[i].addEventListener('click', play);
	}
	

//MAIN LOGIC
	function play() {
		//myGame.functionkey(); //MYGAME OBJECT IS CALLED DIRECTLY AND NEEDS TO BE BEFORE THE FUNCTIONS
		myGame.userChoice = this.id; //FUNCTION CONTEXT - REFERS TO THE ELEMENT THAT WAS TRIGGERING THE FUNTION PLAY 
		myGame.computerInput();
		myGame.compare();
		myGame.display();
	}
