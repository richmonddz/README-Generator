// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Write a short description of your project.",
  },
  {
    type: "input",
    name: "Installation",
    message: "How do your install your project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is your project used for",
  },
  {
    type: "input",
    name: "License",
    message: "What licenses were used?",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who contributed to your project?",
  },
  {
    type: "input",
    name: "Test",
    message: "How do you run tests on your project?",
  },
  {
    type: "input",
    name: "Questions",
    message:
      "What is your prefered email so users may ask you questions regarding your project",
  },
  {
    type: "input",
    name: "Github",
    message: "What is your Github username?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, function (err) {
    if (err) throw err;
    console.log("Awesome! your Read.me has been generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer;
  prompt(questions).then(function (data) {
    writeToFile(fileName, data);
  });
}

// Function call to initialize app
init();
