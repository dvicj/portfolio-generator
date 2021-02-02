const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js"); //9.2.6 - add require statement to receieve exported functions from other page
const {writeFile, copyFile} = require("./utils/generate-site.js"); //9.5.6 - import object from generate-site 

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
            message: "What is your name? (Required)",
            validate: nameInput => {//9.3.6 - receives an argument (users input)
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false; //prompted with same question until they answer 
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username.",
            validate: githubInput => {//9.3.6 - receives an argument (users input)
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false; //prompted with same question until they answer 
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself.",
            when: ({confirmAbout}) => confirmAbout //9.3.6 - like the "validate" method, passes an object of all the answers given so far - a conditional prompt 
        }
    ]);
}; 


const promptProject = portfolioData => { //9.3.5 
    console.log(`
    =================
    Add a New Project  
    ================= 
    `);
    
    
    //9.3.5 - if there's no 'projects' array property, create one
    if (!portfolioData.project) { //9.3.5 - if this comes back negative - ie. there is no projects, create an empty array
        portfolioData.projects = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectInput => {//9.3.6 - receives an argument (users input)
                if (projectInput) {
                    return true;
                } else {
                    console.log("Please enter your project name!");
                    return false; //prompted with same question until they answer 
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project. (Required)',
            validate: descriptionInput => {//9.3.6 - receives an argument (users input)
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description for your project!");
                    return false; //prompted with same question until they answer 
                }
            }
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
            message: 'Enter the Github link to your project. (Required)',
            validate: linkInput => {//9.3.6 - receives an argument (users input)
                if (linkInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub project link!");
                    return false; //prompted with same question until they answer 
                }
            }
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

// promptUser()
//             .then(promptProject) //run propmtProject function after promptUser function
//             .then(portfolioData => {
//                  const pageHTML = generatePage(portfolioData); 

//                 fs.writeFile("./dist/index.html", pageHTML, err => {
//                     if (err) {
//                         console.log(err);
//                         return; 
//                     }
//                     console.log("Page created! Check out index.html in this directory to see it!");

//                     fs.copyFile("./src/style.css", "./dist/style.css", err => {
//                         if (err) {
//                             console.log(err);
//                             return; 
//                         }
//                         console.log("Style sheet copied successfully!")
//                     }); 
//                 }); 
//             }); 

//const pageHTML = generatePage(mockData);


promptUser() //9.5.3 - refractor of above code 
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });