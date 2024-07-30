function myownsettimeout(duration){
    let pr = new Promise(function(resolve){
        setTimeout(resolve,1000);
    })
    return pr;
}

myownsettimeout(1000).then(function(){
    console.log("hi there");
})