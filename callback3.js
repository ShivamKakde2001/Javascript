function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumofSquare(a,b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}

function sumOfCube(a,b,c){
    const val1 = cube(a);
    const val2 = cube(b);
    const val3 = cube(c);
    return val1 + val2 + val3;
}

console.log(sumofSquare(2,3));
console.log(sumOfCube(2,3,4));