const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template"); //9.2.6 - add require statement to receieve exported functions from other page

// const pageHTML = generatePage(name, github); //9.3.5


// fs.writeFile("./index.html", pageHTML, err => { //9.2.5 - 1.file name to be created, 2.the data being written, 3.callback function that will handle errors 
//     if (err) throw err; //creates an exception and stops the execution of the code 
//     console.log("Portfolio complete! Check out index.html to see the output!")
// }); 
const promptUser = () => { //9.3.5 - wrap in function so it can be invoked on demand 
    return inquirer //9.3.5 - use inquirer question object and values (ie. type, name, message)
    .prompt([ //a promise 
        { //array of object - "question" object - properties 
            type: "input", //text reply 
            name: "name", //name property value as the key, user input as the value of that key
            message: "What is your name?"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username."
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself."
        }
    ]);
}; 


const promptProject = portfolioData => { //9.3.5 
    //9.3.5 - if there's no 'projects' array property, create one
    if (!portfolioData.project) { //9.3.5 - if this comes back negative - ie. there is no projects, create an empty array
        portfolioData.projects = [];
    }
    
    console.log(`
    =================
    Add a New Project  
    ================= 
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'Provide a description of your project. (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)'
        },
        {
            type: 'confirm', //boolean, true or false 
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false //in case the question is skipped 
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => { //9.3.5 - add project data to project array 
        portfolioData.projects.push(projectData); //9.3.5 - add projectData from inquirer to new projects array 
        if (projectData.confirmAddProject) { //this reponse was captured in the answer object "projectData in the property confirmAddProject. if user wishes to add another projects then:
            return promptProject(portfolioData); //run promptProject function again - if portfolioData isn't included as the argument, a new array will be initialized and project data will be lost 
        } else {
            return portfolioData; //if not, return the portfolioData so that the object is returned and we can populate HTML file
        } 
    }); 
};

promptUser()
            .then(promptProject) //run propmtProject function after promptUser function
            .then(portfolioData => {
                console.log(portfolioData);
            }); 
