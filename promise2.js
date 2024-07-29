function sHivam(){
    let pro = new Promise(function(resolve){
        setTimeout(function(){
            
            resolve ("hi there its shivam!!!");
        },1000)
    })
    return pro;
}

async function printALLval(){
    pro1 = await sHivam()
    console.log(pro1);
}

printALLval();