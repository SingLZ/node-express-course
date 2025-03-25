
const { writeFile, readFile } = require("fs").promises;  

async function writer() {
    
    try {
        await writeFile("temp.txt", "Hello, world! ");
        await writeFile("temp.txt", "Hello, world One! ", { flag: "a" });
        await writeFile("temp.txt", "Hello, world Two! ", { flag: "a" });
    } catch (error) {
        console.log(error);
    }
}

async function reader() {
    try {
        const data = await readFile("temp.txt", "utf8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

async function readWrite () {
    await writer();
    await reader();
}

readWrite();