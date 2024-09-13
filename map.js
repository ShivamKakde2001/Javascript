const input = [1,2,3,4,5,6];

function transform(i){
    return i ** 2;
}

console.log(input.map(transform));

// Another method to used map method 

const arr = [2,4,5,6,3,9];

let ans = arr.map(function(i){
    return i ** 2;
});

console.log(ans);