const fs  = require("fs");

function promises_1(){
    return new Promise((resolve) => {
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}

promises_1().then(onDone);