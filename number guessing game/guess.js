let no = Math.round(Math.random() * 100); // Random number between 0 and 100
let attempt = 0;
let num;
let done = false;

num = window.prompt("Guess a number from 1 to 100");

// Main game loop
while (!done) {
    num = Number(num);  // Convert input to a number

    if (isNaN(num)) { // Check if num is not a number
        num = window.prompt("DUMBASS... Enter A Number!!!!!!!");
    }
    else if (num > 100 || num < 0) { // Check if the number is out of range
        num = window.prompt("ARE YOU KIDDING ME RIGHT NOW...🥴");
    }
    else { 
        if (num < no) {
            attempt++;
            num = window.prompt("Too low! Try again...");
        }
        else if (num > no) {
            attempt++;
            num = window.prompt("Too high!Try again...");
        }
        else {
            window.alert(`Congratulations for getting the number in ${attempt} attempts, YOU DUMB FUCK!!`);
            done = true;
        }
    }
}
