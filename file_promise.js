function file_read(){
    const fs = require('fs');

    let file_read1 = new Promise(function(resolve){
        fs.readFile('a.txt','utf-8',function(err,data){
            resolve(data)
        })
    })

    return file_read1;
}

async function ansRead(){
    let ans = await file_read();
    console.log(ans);
}

ansRead();