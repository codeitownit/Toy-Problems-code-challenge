//student grade generator
const readline = require('readline');
//creating the user interface for the input and output
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//asking questions from the user and reading their reply

interface.question("Kindly enter your marks:", (userInput) => {
    gradeGenerator(userInput)
    interface.close();
})

// function for checking grade based on student marks
function gradeGenerator(grade){
    if(grade>100){
        console.log("Please enter valid grade number between 0 and 100")
    }
    else if (grade>79) {
        console.log("Excellent, your grade is A");
    } else if (grade<=79&&grade>=69){
        console.log("Well done, your grade is B");
    }
    else if (grade<=59&&grade>=49){
        console.log("Good effort, your grade is C");
}
    else if (grade<=49&&grade>=40){
        console.log("Your grade is D");
    }
    else{
        console.log("Your grade is E");
    }
}



