const inquirer = require("inquirer");
const fs =require("fs");
let createIndexTemplate =(project_name,description,installation) => {
return `# ${project_name}

## Description
${description}


## Table of Contents 

* [Installation](#Installation)
* [User Story](#UserStory)
* [user Guide](#userGuide)
* [Technologies Used](#Technology)
* [Languages Used](#Languages)
* [Final Result](#FinalResult)
* [ResourceReffered](#ResourceReffered)
* [Github_Links](#Github_Links)


## Installation
${installation}

## User Guide
Enter the city name you want to get weather information.You can click on search button or press Enter. You will be able to see today's weather and 5 day weather Forecast.
Now, when you are done and refresh the page, then also you will have the information of the weather of the last search city.(with local storage).

## Technologies Used
1.Bootstrap-CSS Framework<br>
2.Weather forecast Api<br>
3.Ajax
4.Local storage


## Languages used
1.Javascript<br>
2.HTML<br>
3.CSS

## UserStory
As a traveler<br>
I want to see the weather outlook for multiple cities<br>
So that I can plan a trip accordingly.


## Final Result
### ScreenShots
Current updated Weather and 5 day Weather Forecast.
![](Assets/screenshot1.png)


## ResourceReffered
[For other things https://www.w3schools.com/ <br>
[For concepts] https://stackoverflow.com/questions/3275164/javascript-quiz <br>
[GetBootstrap] (https://getbootstrap.com/) - Open-source CSS framework directed at responsive, mobile-first front-end web development.<br>
[OpenWeather API] (https://openweathermap.org/api) - OPEN API to retrieve weather data for cities.<br>
[Postman] (https://www.postman.com/) - The Postman API allows to easy access to API.


## Github_Links
[**URL of My Github Repository**](https://github.com/guptaria/Weather_Dashboard)<br>
[**URL of Deployed Application**](https://guptaria.github.io/Weather_Dashboard/)
`
;
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
    // {
    //   type: 'input',
    //   name: 'project_name',
    //   message: "What's your project name",
    //   default: "i dont have any project name",
    // },
];

inquirer
  .prompt(questions)
  .then(answers => {
//    console.log(answers);
const {project_name,description,installation} = answers;
const template=createIndexTemplate(project_name,description,installation);
fs.writeFile('README.md', template, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
  })
  .catch(error => {
    console.log(error);

  });


