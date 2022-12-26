//I am using modules (added "type":"modules" to package.json)
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
    'What is the TITLE of this project ?',
    'Enter a DESCRIPTION of this project: ',
    'Enter INSTALLATION instructions: ',
    'Enter USAGE Instructions: ',
    'Enter CONTRIBUTION GUIDELINES: ',
    'Enter TEST instructions',
    'Choose a LICENSE for the application',
    'Enter your GitHub username: ',
    'Enter your email address'

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            name: 'title',
            message: questions[0]
        },
        {
            name: 'description',
            message: questions[1]
        }
    ])
    .then( (answers) => {
        console.log(`Debug--`, answers);
    });
}

// Function call to initialize app
init();
