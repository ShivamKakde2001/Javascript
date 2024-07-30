// filesystem module in js
const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("Hiii there is from fileSystem.js");

let a = 0;
for(i=0;i<=1000000000;i++){
    a++;
}

console.log("hi there ");