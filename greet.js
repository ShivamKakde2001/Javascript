function greet(){
    const prompt=require("prompt-sync")({sigint:true}); 
    let name = prompt('Please enter your name:');
    console.log("Hello, " + name + "!"); 
    }
    greet();