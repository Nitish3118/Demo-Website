const fs = require('fs');

// fs.writeFile("myfile.txt", "Welcome to class AI-C",
//     function(err){
//         if(arr) console.log(err);
//         else console.log("no error");
//     }
// )

// fs.appendFile("myfile.txt", "next append data",
//     function(err){
//         if(err) console.error(err);
//         else console.log("no error");
//     }
// )

// fs.rename("myfile.txt", "newfile.txt",
//     function(arr){
//         if(err) console.log(err);
//         else console.log("File renamed");
//     }
// )

// fs.copyFile("newfile.txt", "/new/anotherfile.txt",
//     function(arr){
//         if(arr) console.error(arr);
//         else console.log("Done");
//     }
// )

// fs.rm("*./new2",{recursive:true},
//     function(arr){
//         if(arr) console.error(arr);
//         else console.log("removed");
//     }
// )

const http = require('http');
const server = http.createServer((req,res) =>{
    res.end("This is home page");
});

server.listen(3000)