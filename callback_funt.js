function sum(num1,num2,fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}
function displayResult(data){
    console.log("Result of the above funtion is : "+data);
}
function displayResultPassive(data){
    console.log("Result of the above funtion is : "+data);
}

const ans = sum(1,2,displayResult);
const ans1 = sum(2,3,displayResultPassive);