// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
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
    name: "Table of Contents",
    message: "",
  },
  {
    type: "input",
    name: "Installation",
    message: "How do you install you application?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is you application used for",
  },
  {
    type: "input",
    name: "License",
    message: "What licenses were used?",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who contributed to your application?",
  },
  {
    type: "input",
    name: "Test",
    message: "How do you run tests on you application?",
  },
  {
    type: "input",
    name: "Questions",
    message:
      "What is your prefered email so users may ask you questions regarding you application",
  },
  {
    type: "input",
    name: "Github",
    message: "What is you Github username?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
