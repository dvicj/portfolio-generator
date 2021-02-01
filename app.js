const profileDataArgs = process.argv.slice(2, process.argv.length); //9.1.5 - return an array starting at 3rd index 
const [name, github] = profileDataArgs; //9.2.4 - assignment destructuting - assigns elements of an array to variable names in a single expression
const fs = require("fs");

// const printProfileData = profileDataArr => { //9.1.6 - arrow function 
//     for (let i=0; i<profileDataArr.length; i++){ //9.1.6 - print command line arguments one by one
//         console.log(profileDataArr[i]);
//     }   

//     console.log("==========");

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };


// printProfileData(profileDataArgs); 

//9.2.4 - template literals - interpolate/ insert variables into the function block useing ${} syntax
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>
    <body>
        <h1> ${name} </h1>
        <h2><a href="https://github.com/${github}">Github</a><h2>
    </body>
    <html>
    `; //9.2.4 - ouput the html above in function 
}; 

fs.writeFile("index.html", generatePage(name, github), err => { //9.2.5 - 1.file name to be created, 2.the data being written, 3.callback function that will handle errors 
    if (err) throw err; //creates an exception and stops the execution of the code 
    console.log("Portfolio complete! Check out index.html to see the output!")
}); 
