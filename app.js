const fs = require("fs");
const generatePage = require("./src/page-template.js"); //9.2.6 - add require statement to receieve exported functions from other page

const profileDataArgs = process.argv.slice(2); //9.1.5 - return an array starting at 3rd index 
const [name, github] = profileDataArgs; //9.2.4 - assignment destructuting - assigns elements of an array to variable names in a single expression

fs.writeFile("./index.html", generatePage(name, github), err => { //9.2.5 - 1.file name to be created, 2.the data being written, 3.callback function that will handle errors 
    if (err) throw new Error(err); //creates an exception and stops the execution of the code 
    console.log("Portfolio complete! Check out index.html to see the output!")
}); 
