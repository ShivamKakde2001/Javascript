// Array  Question for practice 
function even(){
    let number=[1,2,4,6,7,9,1];
    let n = [];
    for(i=0;i<=number.length;i++){
    if(number[i]%2==0){
        n.push(number[i]);
    }
}
console.log('Even number in an array are : ',n);
}
even();


// Method 2 :-

function even1(){
    let ages = [22,23,34,25,67,32,23];
    let numberofArray = ages.length;

    for(let i= 0;i<=numberofArray;i++){
        if(ages[i]%2==0){
            console.log(ages[i]);
        }
    }
}
even1();