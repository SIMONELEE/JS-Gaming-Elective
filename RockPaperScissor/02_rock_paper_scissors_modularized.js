// The buttons - user input
//COLLECT ALL THE BUTTONS BY CLASS NAME AND RETURNS IN AN ARRAY CALLED "BUTTONS"
var buttons = document.getElementsByClassName("button"); // returning an array
//NOW THAT THE BUTTONS ARE IN AN ARRAY WE USE A FOR LOOP AND IT LISTENS TO A CLICK AND THEN ACTIVATE THE FUNCTION PLAY
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);
}

// Variables for display purposes
var playerChoiceDisplay = document.getElementById("player_choice"); // display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // display computer's choice
var resultDisplay = document.getElementById("result"); // display the game result

// other global variables
var computerChoice;
var userChoice;

// main function containing the game logic
//FUNCTION PLAY STARTS - 

function play(){
	//USERCHOICE - THIS.ID = EACH BUTTON HAS AN ID. WHEN THE USER CHOOSE THE BUTTON IT TAKES THE ID OF THE BUTTON AND REGISTERS IN USER CHOICE. THIS IN A JAVASCRIPT FUNCTION CONTEXT CAN REFERS TO THE CURRENT OWNER OF THE EVENT. THE BUTTON TRIGGERING THE FUNCTION BECOMES 'THIS'.
	userChoice = this.id; // registering the buttons id!
	computerInput();
	compare();
	display();	
}


function computerInput(){
	//computerChoice = Math.floor(Math.random()*3); //RETURN A WHOLE NUMBER BETWEEN 0 AND 2. 3 IS THE UMBER OF RANDOM NUMBERS WE WANT TO GET AND THEREFORE * WITH.

	
	//SWITCH IS USED WHEN YOU HAVE CASES (RESULT). WHEN IT'S A SIMPLE COMPARISON. IF COMPLEX - USE IF ELSE STATEMENT
	switch(Math.floor(Math.random()*3)){
		case 0:
			computerChoice = "Rock";
			break; // (break if this is true)
		case 1:
			computerChoice = "Paper";
			break;
		case 2:
			computerChoice = "Scissors";
			   
	}
	//console.log(computerChoice);

}

function compare(){
	//IF THE GAME IS A DRAW === three means compare both the content is the same and the same datatype
	if(userChoice === computerChoice){
	   resultDisplay.innerHTML = 'Game is a draw.';
		//ALL OTHER POSSIBILITIES THAN DRAW - IN ELSE IF STATEMENT ONE AT A TIME
	   } else if (userChoice === 'Paper' && computerChoice === 'Rock'){
		resultDisplay.innerHTML = 'You win! ';
	} else if (userChoice === 'Paper' && computerChoice === 'Scissors'){
		resultDisplay.innerHTML = 'You lose! ';
	} else if (userChoice === 'Scissors' && computerChoice === 'Rock'){
		resultDisplay.innerHTML = 'You lose! ';
	} else if (userChoice === 'Scissors' && computerChoice === 'Paper'){
		resultDisplay.innerHTML = 'You win! ';
	} else if (userChoice === 'Rock' && computerChoice === 'Paper'){
		resultDisplay.innerHTML = 'You lose! ';
	} else if (userChoice === 'Rock' && computerChoice === 'Scissors'){
		resultDisplay.innerHTML = 'You win! ';
	} 
}

//TO MAKE USER AND COMPUTER CHOICE VISIBLE - TO DISPLAY
function display(){
	playerChoiceDisplay.innerHTML = userChoice;
	computerChoiceDisplay.innerHTML = computerChoice;
}
