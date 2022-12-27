//I am using modules (added "type":"modules" to package.json)
import inquirer from "inquirer";
//This provides out-of-the-box ansi escape sequences
import ansi from "ansi-escape-sequences";
// Include Template.js
import { createReadmeTemplate } from "./template.js";
// Write files
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
  `What is the ${ansi.styles(["red", "bold"])}TITLE${
    ansi.style.reset
  } of this project ?`,
  `Enter a ${ansi.styles(["red", "bold"])}DESCRIPTION${
    ansi.style.reset
  } of this project: `,
  `Enter ${ansi.styles(["red", "bold"])}INSTALLATION${
    ansi.style.reset
  } instructions: `,
  `Enter ${ansi.styles(["red", "bold"])}USAGE${
    ansi.style.reset
  } Instructions: `,
  `Enter ${ansi.styles(["red", "bold"])}CONTRIBUTION GUIDELINES${
    ansi.style.reset
  }: `,
  `Enter ${ansi.styles(["red", "bold"])}TEST${
    ansi.style.reset
  } instructions (N/A if not applicable)`,
  `Choose a ${ansi.styles(["red", "bold"])}LICENSE${
    ansi.style.reset
  } for the application`,
  `Enter your ${ansi.styles(["red", "bold"])}GitHub Username${
    ansi.style.reset
  }: `,
  `Enter your ${ansi.styles(["red", "bold"])}Email${ansi.style.reset} address`,
];

// TODO: Create a function to initialize app
function init() {
  /*Clear the screen (console) and start at the top
    erase.display deletes the console contents, 
    cursor.position sets the cursor to the top left */
  console.log(`${ansi.erase.display(2)} ${ansi.cursor.position()}`);
  inquirer
    .prompt([
      {
        name: "title",
        message: questions[0],
      },
      {
        name: "description",
        message: questions[1],
      },
      {
        name: "installation",
        message: questions[2],
      },
      {
        name: "usage",
        message: questions[3],
      },
      {
        name: "contributing",
        message: questions[4],
      },
      {
        name: "test",
        message: questions[5],
      },
      {
        type: "list",
        name: "license",
        message: questions[6],
        choices: [
          "Apache 2.0 License",
          "GNU GPL v3",
          "MIT License",
          "Mozilla Public License 2.0",
          "CC0",
        ],
      },
      {
        name: "username",
        message: questions[7],
      },
      {
        name: "email",
        message: questions[8],
      },
    ])
    .then((answers) => {
      let template = createReadmeTemplate(answers);
      fs.writeFile("dist/README.md", template, (err) => {
        console.error(err);
      });
      console.log("README file created: See dist/README.md file");
    })
    .catch((e) => {
      console.log(`Error: ${e}`);
    });
}

// Start the app
init();
