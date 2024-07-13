// Length of the string
function getLength(str){
    console.log("Original String : " +str);
    console.log("Length : ",str.length);
}
getLength("Hello World","Hello");

// Index of the string 

function getIndex(str, target){
    console.log("String :", str);
    console.log("Index : ",str.indexOf(target));
}
getIndex("Hello World World","World");

// find the last index of the string

function lastIndex(str,target){
    console.log("String : ",str);
    console.log("Lasts Index : ",str.lastIndexOf(target));
}
lastIndex("Hello World World World","World");

// Get Slice of the string

function getSlice(str,start,end){
    console.log("String : ",str);
    console.log("Slice : ",str.slice(start,end));
}
getSlice("Shivam Kakde",7,12);

// replace substring from the string 

function getReplace(str, target,replacement){
    console.log("Original String : ",str);
    console.log("After Replacement : ",str.replace(target,replacement));
}
getReplace("Hello World ","World","Javascript");

// Split the string

function getSplit(str){
    console.log("Before Split : ",str);
    console.log("After Split :",str.split(" "))
}
getSplit("Hello This Is SHivam Kakde ")


// trim funtion 

function getTrim(str){
    console.log("Orginal String :",str);
    console.log("After Trim : ",str.trim())
}
getTrim("     Shivam Kakde    ");

// Convert  Upper Case to String

function getUpper(str){
    console.log("Original String :",str);
    console.log("UpperCase : ",str.toUpperCase())
}
getUpper("Hello World This is Shivam Kakde");

// Convert String Into Lower Case 

function getLower(str){
    console.log("Original String: ",str);
    console.log("Lower Case : ",str.toLowerCase())
}
getLower("HELLO WORLD THIS IS SHIVAM KAKDE")