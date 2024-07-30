function SumofAll(){
    let pr1 = new Promise(function(resolve){
        setTimeout(resolve(5),1000);    
    })

    let pr2 = new Promise(function(resolve){
        setTimeout(resolve(6),5000);
    })

    let pr3 = new Promise(function(resolve){
        setTimeout(resolve(8),3000);
    })

    return pr1+pr2+pr3;
}
async function answer(){
    let ans = await SumofAll();
    console.log(ans);
}

answer();