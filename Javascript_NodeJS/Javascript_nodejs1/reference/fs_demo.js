const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname,'/test'),{}, err => {
//     if(err) throw err;
//     console.log('Folder created...')
// });



// Create and write file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello Nigga', err => {
//     if(err) throw err;
//     console.log('File written...')

//     // File append
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'Hello Nigga', err => {
//         if(err) throw err;
//         console.log('File written...')
//     })
// });


// Read File 
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) =>{
    if(err) throw err;
    console.log(data)
}
)

// Rename File
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','hellojade.txt'),(err,data) =>{
    if(err) throw err;
    console.log(data)
}
)