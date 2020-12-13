const inquirer = require("inquirer");
const fs = require("fs");
let createIndexTemplate = (projectName, description, installation, languages, technology, userStory, license, contributors, email) => {
  return `


 # ${projectName}   ${license}

 ## Description
 **${description}**


 ## Table of Contents 

 * [Installation](#Installation)
 * [Languages Used](#LanguagesUsed)
 * [Technologies Used](#TechnologiesUsed)
 * [User Story](#UserStory)
 * [License](#License)
 * [Contributing](#Contributing)
 * [Tests](#Tests)
 * [Final Result](#FinalResult)
 * [ResourceReferred](#ResourceReferred)
 * [Github_Links](#Github_Links)
 * [Questions](#Questions)

 ## Installation
   ${installation}

 ## LanguagesUsed:
   ${languages}

 ## TechnologiesUsed:
  ${technology}


 ## UserStory
 As a User </br>
  ${userStory}


 ## License
​  This project is licensed under the ${license} license.

 ## Contributing
​   The ${projectName} Project has ${contributors} contributors.
​
 ## Tests 
   To run tests, run the following command:<br>
    \`\`\`npm i\`\`\`\


 ## Final Result
  ![](assets/images/screen1.png)
  ![](assets/images/screen2.png)
  ![](assets/images/screen3.png)


 ## ResourceReferred
 [For other things https://dev.to/charalambosioannou/create-a-dynamic-github-profile-readme-il5 <br>
 [For concepts] https://dev.to/hemant/i-rebuilt-my-github-profile-and-made-it-dynamic-2m6c

 ## Watche the Video 
 [![Watch the video] <iframe src="https://drive.google.com/file/d/1Xd7t6BjUG1tExpY9Xecx8aSlEDrlrGYr/preview" width="640" height="480"></iframe>

 ## Questions
   If you have any questions, contact me at ${email} </br>
   My Github https://github.com/guptaria
                

`;
}

var questions = [
  {
    type: 'input',
    name: 'projectName',
    message: "What's your project name?",
    default: "Readme",

  },
  {
    type: 'input',
    name: 'description',
    message: "Describe your project?",
    default: "This project is creating Readme, in which user input the information about the Project."
  },

  {
    type: 'input',
    name: 'installation',
    message: "What is required for installation?",
    default: "You need to Clone the Respository on your local and install Node module."
  },

  {
    type: 'checkbox',
    name: 'languages',
    message: "which are the languages you have used for this project?",
    choices: ["HTML", "Css", "JavaScript", "React ", "None"]
  },
  {
    type: 'checkbox',
    name: 'technology',
    message: "which are the Technology you have used for this project?",
    choices: ["BootStrap", "Api", "Ajax", "Local Storage", "None"]
  },
  {
    type: 'input',
    name: 'userStory',
    message: "What is the user story?",
    default: "I want to create a Good Readme that can be used for any project. Basically it should just have template and input will be given by user."

  },
  {
    type: 'list',
    name: 'license',
    message: "What is the licence of the project?",
    choices: ["ISC", "MIT", "PDDL", "Unlicense"]
  },
  {
    type: 'input',
    name: 'contributors',
    message: "How many do you have in your team for this project?",

  },
  {
    type: 'input',
    name: 'email',
    message: "What is the your email?",

  },
];

const createBadge = (license) => {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "ISC") {
    return `[![License:ISC](https://img.shields.io/badge/License-$ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license === "PDDL") {
    return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`
  }
  else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}


inquirer
  .prompt(questions)
  .then(answers => {
    //    console.log(answers);
    let { projectName, description, installation, languages, technology, userStory, license, contributors, email } = answers;
     license=createBadge(license);
    const template = createIndexTemplate(projectName, description, installation, languages, technology, userStory, license, contributors, email);
    fs.writeFile('README.md', template, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch(error => {
    console.log(error);

  });



  


