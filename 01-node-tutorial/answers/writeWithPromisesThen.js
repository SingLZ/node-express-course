const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "Hi ") // write line 1  
    .then(() => {  
        return writeFile("temp.txt", "Hi 1 ", { flag: "a"})  // write line 2.  
    // Return the promise so you can chain the .then statements  
    })  
 // write the third line, and follow that with two more .then blocks,  
 // one to call readFile to read it back out, and one to log the data to the screen.  
    .then(() => {  
        return writeFile("temp.txt", "Hi 2 ", { flag: "a" })  
    })
    .then(() => {  
        console.log("Reading the file"); 
        return readFile("temp.txt", 'utf8')
    })
    .then((data) => {
        console.log(data);
         
    })  
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 });
