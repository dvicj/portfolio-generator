//9.2.4 - template literals - interpolate/ insert variables into the function block useing ${} syntax
module.exports = templateData => {
    //9.4.3 - destructure projects and about data from templateData based on their property key names
    const { projects, about, ...header } = templateData; //9.4.3 - create new variables based on data stored in an object ie. projects and about are property keys of templateData
    //9.4.3 - header takes the REST of the data that hasn't been destructured from templateData and storing in a new object - a rest operator 

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3"> ${header.name} </h1> 
                <nav class="flex-row">
                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">Github</a>
                </nav>
            </div>
        </header>
        <main class="container my-5">
        </main>
        <footer>
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>   
        </footer>
    </body>
    <html>
    `; //9.2.4 - ouput the html above in function 
}; 

// module.exports = generatePage; //9.2.6 - use functions from one module inside another - put module.exports at botth of the file we want to make available
