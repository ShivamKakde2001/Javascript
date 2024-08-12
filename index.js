const express = require('express');
const fs = require('fs');
const app = express();
const PORT = "3000";

app.use(express.json);

app.get('/file/:filename',function(req,res){
    let name = req.params.filename;
    console.log(name);
    fs.readFile(name,'utf-8',function(err,data){
        res.json({
            data
        })
        
    })
})

app.listen(PORT,() => {
    console.log('this is http server from port 5721');
})