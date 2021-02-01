const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template"); //9.2.6 - add require statement to receieve exported functions from other page

// const pageHTML = generatePage(name, github); //9.3.5


// fs.writeFile("./index.html", pageHTML, err => { //9.2.5 - 1.file name to be created, 2.the data being written, 3.callback function that will handle errors 
//     if (err) throw err; //creates an exception and stops the execution of the code 
//     console.log("Portfolio complete! Check out index.html to see the output!")
// }); 

inquirer //9.3.5 - use inquirer question object and values (ie. type, name, message)
    .prompt([
        { //array of object - "question" object - properties 
            type: "input", //text reply 
            name: "name", //name property value as the key, user input as the value of that key
            message: "What is your name?"
        }
    ])
    .then (answers => console.log(answers)); //9.3.5 - a promise 