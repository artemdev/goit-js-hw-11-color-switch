//variables
const startBtn = document.querySelector("button[data-action='start']")
const stopBtn = document.querySelector("button[data-action='stop']")
const body = document.querySelector("body")
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
let colorTimerId = 0; 
const DELAY = 1000



//functions
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// VERSION 1

const startChangingBg = () => {
    colorTimerId = setInterval(() => {
        const i = randomIntegerFromInterval(1, 6)
        body.style.backgroundColor = colors[i]
    }, DELAY);

}

const stopChangingBg = () => {
    clearInterval(colorTimerId)
}

// listeners
startBtn.addEventListener("click", startChangingBg)
stopBtn.addEventListener("click", stopChangingBg)

// VERSION 2
// const changeBg = (event) => {

//     if(event.target.innerHTML === "Start") {
//         colorTimerId = setInterval(() => {
//             const i = randomIntegerFromInterval(1, 6)
//             body.style.backgroundColor = colors[i]
//         }, DELAY);
//     }

//     if(event.target.innerHTML === "Stop") {
//         clearInterval(colorTimerId)
//     }
// }

// listeners
// startBtn.addEventListener("click", changeBg)
// stopBtn.addEventListener("click", changeBg)





