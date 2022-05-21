// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(
      license
    )})`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  if (license === "Eclipse") {
    return "https://opensource.org/licenses/EPL-1.0";
  }
  if (license === "IBM") {
    return "https://opensource.org/licenses/IPL-1.0";
  }
  if (license === "Mozilla") return "https://opensource.org/licenses/MPL-2.0";
}
if (license === "N/A") {
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#test)
  7. [GitHub](#github)
  8. [E-mail](#questions)

# Description
${data.description}
# Installation
${data.installation}
# Usage
${data.usage}
# License
* ${renderLicenseBadge(data.license)}
# Contributing
${data.contributing}
# Test
${data.test}
# Questions
For any questions please email me at 
 * ${data.questions}
# Github
See this project and others at
 * Github Username - ${data.github}
 * Github URL - ${data.githubLink}


`;
}

module.exports = generateMarkdown;
