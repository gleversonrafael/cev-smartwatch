// variables
let timeS = document.querySelector("h1.sp");

let body = document.body;

body.addEventListener("load", timeInt());
timeS.addEventListener("load", timeC())

// functions
function timeInt() {
    setInterval(timeC, 1000)
}

function timeC() {
    let aTime = new Date();
    
    let hours = aTime.getHours();
    let minutes = aTime.getMinutes();

    if(hours < 10) {
        hours.toString();
        hours = `0${hours}`
    }

    if(minutes < 10) {
        minutes.toString();
        minutes = `0${minutes}`;
    }

    let fTime = `${hours}:${minutes}`;

    timeS.innerHTML = fTime;
}
