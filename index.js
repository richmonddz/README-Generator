// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
const fileName = "README.md";
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How do your install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your project used for",
  },
  {
    type: "list",
    name: "license",
    message: "What licenses were used? (Use the arrow keys to navigate)",
    choices: ["MIT", "Apache", "Eclipse", "IBM", "Mozilla", "N/A"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you run tests on your project?",
  },
  {
    type: "input",
    name: "questions",
    message:
      "What is your prefered email so users may ask you questions regarding your project",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "githubLink",
    message: "What is your Github URL?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, function (err) {
    if (err) throw err;
    console.log("Awesome! Your README.md has been generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile(fileName, data);
  });
}

// Function call to initialize app
init();
