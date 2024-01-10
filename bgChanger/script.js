


const randomNumber = function () {
    let hex = '#'
    let num = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
        hex = hex + num[Math.floor(Math.random() * 16)];
    }
    console.log(hex);

    return hex;
}
//console.log(Math.random()*16);
//console.log(randomNumber());
//randomNumber();

let intervalId;
const startChangingColor = function () {
     
    if(intervalId==null){
        intervalId = setInterval(changeBgColor, 1000);
    }
    

    function changeBgColor() {
        document.body.style.backgroundColor = randomNumber();
    }
};
const stopColor = function () {
    clearInterval(intervalId);
    intervalId = null;
    //return intervalId;
};
// console.log(stopColor());
const startBtn = document.getElementById("start");

startBtn.addEventListener('click', startChangingColor);

document.getElementById("stop").addEventListener('click', stopColor);

