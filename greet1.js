function greet_gender(male){
    const prompt=require("prompt-sync")({sigint:true}); 
    let gender = prompt('Enter your gender : ');
    if(gender==male){
        console.log("Hello Your are " +gender);
    }
    else{
        console.log("Hello your are " +gender);
    }
}
greet_gender();