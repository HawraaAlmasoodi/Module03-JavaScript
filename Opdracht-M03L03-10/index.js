
let name = prompt("Welkom! Wat is je naam?");
if (name == null || name == "") {
    alert("User cancelled the prompt.");
} else {
    alert("Hey" + ' ' + name);
}

alert("You have 5 guesses. Guess 1-25");

number = Math.floor(Math.random() * 25) + 1;
console.log(number);
let userGuess = prompt("What's your guess?");
let reminingAttepts = 5;

for (i = 1; i < 5; i++) {
    if (userGuess > number) {
        reminingAttepts = reminingAttepts - 1;
        userGuess = prompt("your guess was too high. You have " + reminingAttepts +
            ". Try again:");
    } if (userGuess < number) {
        reminingAttepts = reminingAttepts - 1;
        userGuess = prompt("your guess was too low.  You have " + reminingAttepts +
            ". Try again:");
    } else {
        alert("Congratulations you have won. The game is now over");
        alert("Thanks for playing, see you next time!");
        break;
    }
}

