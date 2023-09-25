//speed detector

const { exit } = require('process');
const readline = require('readline');
//creating the user interface for the input and output
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//asking questions from the user and reading their reply

interface.question('Enter the speed in km/s: ', (userInput) => {
    speedDetector(userInput);
    interface.close();
});
// funcion to check the speed limit
function speedDetector(speed) {
    if (speed < 70) {
        console.log("Ok");
    } else if (speed > 70) {
        let remainder = speed - 70;
        points=remainder/5;
        console.log("Points: ", points);
        if (points > 12) {
            console.log("License suspended");
        } else {
            exit;
        }
    } 
}