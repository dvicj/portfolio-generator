const profileDataArgs = process.argv.slice(2, process.argv.length); //9.1.5 - return an array starting at 3rd index 

const printProfileData = profileDataArr => { //9.1.6 - arrow function 
    for (let i=0; i<profileDataArr.length; i++){ //9.1.6 - print command line arguments one by one
        console.log(profileDataArr[i]);
    }   

    console.log("==========");

    profileDataArr.forEach(profileItem => console.log(profileItem));
};


printProfileData(profileDataArgs); 