function checkMail(){
    return new Promise((resolve,reject) => {
        if(Math.random > 0.5){
            resolve('Mail is arrived ');
        }
        else {
            reject(new Error("Error is occured"));
        }
    })
};

checkMail().then((mail) => {
    console.log(mail);
}).catch((Error) => {
    console.error(Error);
}).finally(()=>{
    console.log("Experiment is completed")
});