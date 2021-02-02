//9.2.4 - template literals - interpolate/ insert variables into the function block useing ${} syntax
module.exports = templateData => {
    console.log(templateData);
    //9.4.3 - destructure projects and about data from templateData based on their property key names
    const { projects, about, ...header } = templateData; //9.4.3 - create new variables based on data stored in an object ie. projects and about are property keys of templateData
    //9.4.3 - header takes the REST of the data that hasn't been destructured from templateData and storing in a new object - a rest operator 
    const header = {
        name: templateData.name,
        github: templateData.github
    };

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
        <h1> ${templateData.name} </h1>
        <h2><a href="https://github.com/${templateData.github}">Github</a><h2>
    </body>
    <html>
    `; //9.2.4 - ouput the html above in function 
}; 

// module.exports = generatePage; //9.2.6 - use functions from one module inside another - put module.exports at botth of the file we want to make available
