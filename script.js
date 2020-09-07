'use strict';

function checkTime(number)
{
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

function getCurrentFormattedTime() {
    let today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    return h + ":" + m + ":" + s;
}

let myTimeElem = document.createElement('h2');
myTimeElem.id = 'time';
document.body.appendChild(myTimeElem);

myTimeElem.innerHTML = 'Время ' + getCurrentFormattedTime();

let myInterval = setInterval(()=>{
    myTimeElem.innerHTML = 'Время ' + getCurrentFormattedTime();
}, 1000);

let buttonStart = document.createElement('button');
buttonStart.innerHTML = 'Start';
document.body.appendChild(buttonStart);

buttonStart.addEventListener('click', ()=>{
    window.clearInterval(myInterval);
    myInterval = setInterval(()=>{
        myTimeElem.innerHTML = 'Время ' + getCurrentFormattedTime();
    }, 1000);
});

let buttonStop = document.createElement('button');
buttonStop.innerHTML = 'Stop';
document.body.appendChild(buttonStop);

buttonStop.addEventListener('click', ()=>{
    window.clearInterval(myInterval);
});

