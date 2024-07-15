const allUsers = [{
    firstname : "Shivam",
    gender : "male"
},{
    firstname : "Parth",
    gender : "male"
},
{
    firstname : "Priya",
    gender : "female"

}]
for (let i=0;i< allUsers.length;i++){
    if(allUsers[i].gender==="male"){
        console.log(allUsers[i].firstname)
    }
}
console.log(allUsers);