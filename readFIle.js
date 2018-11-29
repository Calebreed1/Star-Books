const fs = require('fs');

// Non-blocking example with fs.readFile
const fileNames = process.argv.splice(2);
 const fileName = "https://api.myjson.com/bins/1estua"
fileNames.forEach(fileName => {
    fs.readFile(fileName, 'utf-8', (error, data) => {
        if (error) throw error;
        console.log(fileName, data);
  });
});

// Blocking example with fs.readFileSync
const fileName = fileNames[0];
console.log(fileName, fs.readFileSync(fileName, 'utf-8'));