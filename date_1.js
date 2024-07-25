function currentDate(){
    const currentDates = new Date();
    console.log(currentDates.getHours(),currentDates.getMinutes(),currentDates.getSeconds());
}
currentDate();
setInterval(currentDate,1000);