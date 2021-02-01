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

module.exports = generatePage; //9.2.6 - use functions from one module inside another - put module.exports at botth of the file we want to make available
