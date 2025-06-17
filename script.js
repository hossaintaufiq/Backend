const fs = require('fs');



// Write "Hello world!" to a file named hello.txt

// fs.writeFile("hello.txt", "Hello world!", function(err){
//     if(err) console.error(err); 
//     else console.log("File written successfully!");
// })


//  append something to the file hello.txt 

// fs.appendFile("hello.txt", "\nNew line for the append operation", function(err){
//     if(err) console.error(err); 
//     else console.log("Append operation completed successfully!"); 
// })

// reading a file from the existing file system 
// fs.readFile("hello.txt", function(err,data){
//     if(err) console.error(err); 
//     else console.log(data.toString()); 

// })


//  rename an existing file 
// fs.rename("data.txt", "dataset.txt", function(err){
//     if(err) console.error(err); 
//     else console.log ("File renamed successfully to dataset.txt!");
// })

// coping a file to another location 

// fs.copyFile("dataset.txt","Copy/dataset.txt", function(err){
//     if(err) console.error(err); 
//     else console.log("File copied successfully to Copy/dataset.txt!");
// } )

  

// delettin file form the file system 

fs.unlink("Copy/data.txt", function(err){
    if(err) console.error(err); 
    else console.log("File deleted successfully from Copy/data.txt!");
})