const profileDataArgs = process.argv.slice(2, process.argv.length); //9.1.5 - return an array starting at 3rd index 
const [name, github] = profileDataArgs; //9.2.4 - assignment destructuting - assigns elements of an array to variable names in a single expression

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

console.log(name, github);
console.log(generatePage(name, github));