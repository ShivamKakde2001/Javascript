function greet(){
    console.log("hello world");
}

function greetAlien(){
    console.log("hello Universe");
}

// setTimeout is a pre defined funtion which  used to run funtion on the 
// set of time 
setTimeout(greet,4*1000);
setTimeout(greetAlien,3*1000);