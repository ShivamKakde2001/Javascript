function Async(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there!!!")
        },2000)
    })
    return p;
}

async function printAll(){
    let pr = await Async()
    console.log(pr);
}

printAll();