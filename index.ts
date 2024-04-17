// import a 'inquirer' module which is command line interface for Node.js
import inquirer from "inquirer";

// Declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answer : {
    Sentence : string
} = await inquirer.prompt ([{
    name : "Sentence",
    type : "input",
    message : "Enter your sentence to count the words: "
}]);
const words = answer.Sentence.trim().split(" ")
// print the array of the words to the console
console.log(words);
// Print the words count of the sentence to the console
console.log(`your sentence word count is ${words.length}`)