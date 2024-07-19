function square(n){
    return n*n;
}

function sumofSquare(a,b,c){
    const var1 = square(a);
    const var2 = square(b);
    const var3 = square(c)

    return var1 + var2,var3;
}
console.log(sumofSquare(2,3,4));