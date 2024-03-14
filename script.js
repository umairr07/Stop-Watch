let display = document.querySelector('.display')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')

let timer = null;
let startTime = 0;
let elapseTime = 0;
let isRunning = false;


start.addEventListener('click', () => {
    if (!isRunning) {
        startTime = Date.now() - elapseTime;
        timer = setInterval(upadate, 10)
        isRunning = true;
    }
})

stop.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        elapseTime = Date.now() - startTime;
        isRunning = false;
    }
})

reset.addEventListener('click', () => {
    clearInterval(timer)
    startTime = 0;
    elapseTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
})

function upadate() {
    const currTime = Date.now();
    elapseTime = currTime - startTime;

    let hours = Math.floor(elapseTime / (1000 * 60 * 60))

    let minutes = Math.floor(elapseTime / (1000 * 60) % 60);

    let seconds = Math.floor(elapseTime / 1000 % 60);

    let miliSecs = Math.floor(elapseTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliSecs = String(miliSecs).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliSecs}`;
}