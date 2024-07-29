function Async(){
    let p = new Promise(function(resolve){
        setTimeout(resolve,2000);
    })
    return p;
}

function Async1(){
    let p1 = new Promise(function(resolve){
        setInterval(resolve,3000);
    })
    return p1;
}
 const b = Async1();
 b.then(function(){
    console.log("hello!!!");
 })


const a = Async();
a.then(function(){
    console.log("hi there!!")
})

console.log("before hi there!!");