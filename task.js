const transformArray = (n) =>{
    for(i=0;i<n.length;i++){
        return n[i];
    }
}

const map = (fn) =>{
    arr = [2,3,4,5,6];
    let ans = fn(arr);
    return ans;
}

console.log(map(transformArray));
