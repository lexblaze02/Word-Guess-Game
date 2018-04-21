var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = []
var userGuess; 
var letterGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];


    document.onkeyup = function (event){
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(event.key)
   
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;
	}

	
	if (letterGuessed == userGuess) {
        wins++;
		guessesLeft = 10; 
		guessesSoFar = [];
		letterGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
	}

	if (guessesLeft == 0) {
		losses++;
		guessesLeft = 10;
		guessesSoFar = [];
		letterGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
	}

	var html = "<h1>The Psychic Game</h1>" + "<h3>Guess what letter I\'m thinking of</h3>" + "<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>" + "<h3>Guesses Left: " + guessesLeft + "</h3>" + "<h3>Your guesses: " + guessesSoFar + "</h3>";

    document.querySelector("#game").innerHTML = html;
    }   