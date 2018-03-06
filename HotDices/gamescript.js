class Rocket {

		constructor(description, engines){
			this.description = description; 
			this.engines = engines;
			this.fuel = 0; 
		}

		describeYourself(){
			console.log('I am a ' + this.description + ' with ' + this.engines + ' engines.');
		}
		
		get tank (){
			return 'Tank is filled with ' + this.fuel + ' gallons.'
		}
		
		set tank (liter){
			var gal = liter * 0.264172;
			this.fuel = gal;
		}
		
		static distressSignal (){
			console.log('Houston, we have a problem!');
		}
	} // class end
	

	class Saturn extends Rocket {
		
		constructor(){
			super("Saturn V", 4);
			this.enginetype = 'F-1';
		}
		
		describeYourself(){
			super.describeYourself();
			console.log('Enginetype: ' + this.enginetype);
		}

	} //sub-class end 
	
	
	
	//instantiate an object
	var awesomeRocket = new Rocket("Spaceship", 5);
	awesomeRocket.describeYourself();
	console.log(awesomeRocket.tank); //getter
	awesomeRocket.tank = 20000; //setter
	console.log(awesomeRocket.tank);
	Rocket.distressSignal(); //call to the staric method
	
	//instantiate an object from the sub-class 
	var mySaturn = new Saturn();
	mySaturn.describeYourself(); //the overridden descripteYourself method 
	mySaturn.addLoad('Lunar Roving Vehicle');
	
	
</script>
</head>

<body>
</body>
</html>
















































































var die = document.getElementById("playerDice1");
var playerInput;

    playerInput = function(){
		'use strict';
		switch(Math.floor(Math.random()*6)){
			case 0:
				die = "1";
				break;
			case 1:
				die = "2";
				break;
			case 2:
				die = "3";   
				break;
			case 3:
				die = "4";
				break;	
			case 4:
				die = "5";
				break;
			case 5:
				die = "6";
				break;
			}
		};

console.log(playerInput());


