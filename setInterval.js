function greet(){
    console.log("Hello  World");
}

function greetAlien(){
    console.log("Hello Universe");
}

setInterval(greet,3*1000);
setInterval(greetAlien,2*1000);