// Reverse array 

function reverse(arr,start,end){
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
function print_array(arr,size){
    for (i=0;i<=size;i++){
        console.log(arr[i]);
    }
}
const arr = [1,2,3,4,5,6,7];
const n = 7;
reverse(arr,0,n-1);
console.log("Reverse array are : ")
print_array(arr,n);