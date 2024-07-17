function aRRay(){
    const arr = [1,2,3,4,5];
    console.log("Original Array : ",arr);
    arr.push(7);
    console.log("After Push the Element : ",arr);
    arr.pop();
    console.log("Array After Pop the element : ",arr);
    arr.shift();
    console.log("Pop the element from the front :",arr);
    arr.unshift(0);
    console.log("Add the element in front of the array : ",arr);
}
aRRay();

// Concat the array : 
function conCat(){
    let arr1 = [1,2,3,4,5];
    let arr2 = [6,7,8,9,10];
    arr3 = arr1.concat(arr2);
    console.log(arr3);
}
conCat();

// 
intialArray = [1,2,4];
for (i=0;i<=intialArray.length;i++){
    console.log(intialArray[i]);
}

// for each

arr1 = [1,2,3,4]
 function logTime(str){
    console.log(str);
 }
 arr1.forEach(logTime);