//I am using modules (added "type":"modules" to package.json)
import inquirer from "inquirer";
//This provides out-of-the-box ansi escape sequences
import ansi from 'ansi-escape-sequences';

// TODO: Create an array of questions for user input
//`${ansi.styles(['red','bold'])} Test ${ansi.style.reset} Test
const questions = [
    `What is the ${ansi.styles(['red','bold'])}TITLE${ansi.style.reset} of this project ?`,
    `Enter a ${ansi.styles(['red','bold'])}DESCRIPTION${ansi.style.reset} of this project: `,
    `Enter ${ansi.styles(['red','bold'])}INSTALLATION${ansi.style.reset} instructions: `,
    `Enter ${ansi.styles(['red','bold'])}USAGE${ansi.style.reset} Instructions: `,
    `Enter ${ansi.styles(['red','bold'])}CONTRIBUTION GUIDELINES${ansi.style.reset}: `,
    `Enter ${ansi.styles(['red','bold'])}TEST${ansi.style.reset} instructions (N/A if not applicable)`,
    `Choose a ${ansi.styles(['red','bold'])}LICENSE${ansi.style.reset} for the application`,
    `Enter your ${ansi.styles(['red','bold'])}GitHub Username${ansi.style.reset}: `,
    `Enter your ${ansi.styles(['red','bold'])}Email${ansi.style.reset} address`

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
        },
        {
            name: 'installation',
            message: questions[2]
        },
        {
            name: 'usage',
            message: questions[3]
        },
        {
            name: 'contribution',
            message: questions[4]
        },
        {
            name: 'test',
            message: questions[5]
        },
        {
            name: 'license',
            message: questions[6]
        },
        {
            name: 'username',
            message: questions[7]
        },
        {
            name: 'email',
            message: questions[8]
        },
    ])
    .then( (answers) => {
        console.log(`Debug--`, answers);
    });
}

// Function call to initialize app
init();
