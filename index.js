const express = require("express");
const port = '3000';
const app = express();

app.get('/hello',function(req,res){
    res.send("Hello World ");
})

app.listen(port);