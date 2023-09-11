let Today=new Date().getDay()
switch(Today){
    case 1:
    document.querySelector('.Day').textContent="Day: Monday"
    break
    case 2:
        document.querySelector('.Day').textContent="Day: Tuesday" 
        break
    case 3:
        document.querySelector('.Day').textContent="Day: Wednesday" 
        break
    case 4:
        document.querySelector('.Day').textContent="Day: Thurday" 
        break
    case 5:
        document.querySelector('.Day').textContent="Day: Friday" 
        break
    case 6:
        document.querySelector('.Day').textContent="Day: Saturday"
        break
    case 0:
        document.querySelector('.Day').textContent="Day: Sunday" 
        break
   
}
// Create a new Date object
const currentDate = new Date();
// Get the current time
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();
document.querySelector('.time').textContent=`Current Time: ${currentHour}:${currentMinute}:${currentSecond}`
