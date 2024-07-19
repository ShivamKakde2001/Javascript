function square(n){
    return n * n;
}
function cube(n){
    return n*n*n;
}
function sumOfSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

console.log(sumOfSomething(2,3,square));
console.log(sumOfSomething(3,2,cube));
