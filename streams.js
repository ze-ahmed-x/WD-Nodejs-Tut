const fs = require('fs');
const readStream = fs.createReadStream('./files/blog1.txt', 'utf-8');
const writeStream = fs.createWriteStream('./files/blog2.txt');
readStream.on('data', (chunk) => {
    console.log(chunk);
});
readStream.pipe(writeStream);