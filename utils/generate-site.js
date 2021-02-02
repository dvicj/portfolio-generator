const fs = require("fs"); 

const writeFile = fileContent => { //9.5.4 - javascript promise
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            //if there is an error, reject the Promise and send the error to the Promise's '.catch()' method
            if(err) {
                reject(err);
                //return out of the function here to make sure the Promise does not accidentally execute the resolve() function as well
                return;
            }
            //if everything went well, resolve the Promise and send the successful data to the '.then()' menthod
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    }); //promise object allows us to run code that at some point will be in a status of "pending"
};