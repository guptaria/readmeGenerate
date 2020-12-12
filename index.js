const inquirer = require("inquirer");
const fs =require("fs");
let createIndexTemplate =(project_name,description,installation,languages,Technology,UserStory,License,contributors,email) => {
return `
[![License:ISC](https://img.shields.io/badge/License-$ISC-blue.svg)](https://opensource.org/licenses/ISC)
 # ${project_name}

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
   ${Technology}


 ## UserStory
 As a User </br>
  ${UserStory}


 ## License
​  This project is licensed under the ${License} license.

 ## Contributing
​   The ${project_name} Project has ${contributors} contributors.
​
 ## Tests 
   To run tests, run the following command:<br>
    npm i


 ## Final Result
  ![](Assets/screenshot1.png)


 ## ResourceReffered
 [For other things https://dev.to/charalambosioannou/create-a-dynamic-github-profile-readme-il5 <br>
 [For concepts] https://dev.to/hemant/i-rebuilt-my-github-profile-and-made-it-dynamic-2m6c


 ## Questions
   If you have any questions, contact me at ${email} </br>
   My Github https://github.com/guptaria
                

`;
}

var questions = [
    {
      type: 'input',
      name: 'project_name',
      message: "What's your project name?",
      
    }, 
    {
      type: 'input',
      name: 'description',
      message: "Describe your project?",
      
    },

    {
      type: 'input',
      name: 'installation',
      message: "What is required for installation?",
      
    },

    {
      type: 'checkbox',
      name: 'languages',
      message: "which are the languages you have used for this project?",
      choices:["HTML" ,"Css","javaScript" , "React ","None"]
    },
    {
      type: 'checkbox',
      name: 'Technology',
      message: "which are the Technology you have used for this project?",
      choices:[" BootStrap" ,"Api" ,"Ajax", "Local Storage" ,"None"]
    },
    {
      type: 'input',
      name: 'UserStory',
      message: "What is the user story?",
      
    },
    {
      type: 'list',
      name: 'License',
      message: "What is the licence of the project?",
      choices:[" ISC" ,"MIT" , "PDDL" , "Unlicense"]
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





inquirer
  .prompt(questions)
  .then(answers => {
//    console.log(answers);
const {project_name,description,installation,languages,Technology,UserStory,License,contributors,email} = answers;
const template=createIndexTemplate(project_name,description,installation,languages,Technology,UserStory,License,contributors,email);
fs.writeFile('README.md', template, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
  })
  .catch(error => {
    console.log(error);

  });






  