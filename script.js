console.log("it works!!");

//Display Today 
var today = new Date();
document.getElementById('pick').innerHTML = `Today is : ${today}`

// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// document.getElementById('pick').innerHTML = days[ today.getDay()] + " " + today.getDay() + ", " + months[today.getMonth()] + " " + today.getFullYear();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const formatTime = (time) => {
    return time < 10 ? (`0${time}`): time;
}

//Get expected trip && calc differences
const myTrip = "20 Jan 2021";

const countdown = () => {
    const dateFuture = new Date(myTrip); 
    const currentDate = new Date()

    const diffInMilliseconds = Math.abs(dateFuture -  currentDate) / 1000;

    //calculate days (1 day == 86400secs)
    const days_left = Math.floor(diffInMilliseconds / 86400);
    
    //calculate hours (1 hour == 3600secs)
    const hours_left =  Math.floor(diffInMilliseconds / 3600) % 24


    //calculate minutes (1min == 60secs)
    const minutes_left =  Math.floor(diffInMilliseconds / 60) % 60

    //calculate seconds (60secs)
    const seconds_left =  Math.floor(diffInMilliseconds) % 60
    
    daysEl.innerHTML    = days_left
    hoursEl.innerHTML   = formatTime(hours_left)
    minsEl.innerHTML    = formatTime(minutes_left)
    secondsEl.innerHTML = formatTime(seconds_left)





}

countdown();
setInterval(countdown, 1000);