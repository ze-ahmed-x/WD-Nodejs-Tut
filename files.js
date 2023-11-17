const fs = require('fs');
// console.log(fs);

// Read files
// fs.readFile('./files/blog1.txt', (err, data) => {
//     // in js null = false
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }
// });

// write file
// fs.writeFile('./files/blog1.txt', 'Hello world', () => {
//     console.log('File written');
// });

//make or delete dir
if (!fs.existsSync('./assets'))
{
    fs.mkdir('./assets', (err) => {
        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log('Dir has been created');
        }
    });
}
else 
{
    fs.rmdir('./assets', () => {
        console.log('Dir deleted');
    });
}
