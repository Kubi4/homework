alert('Game start. You have only 30 seconds');
let sum = 0;
let greenCircle = document.querySelector('.green');
greenCircle.addEventListener('click', function() {
    let pPoints = document.createElement('p');
    let divPoints = document.querySelector('.points');
    divPoints.append(pPoints);
    pPoints.innerText = '2 points';
    sum+= 2;
});

let yellowCircle = document.querySelector('.yellow');
yellowCircle.addEventListener('click', function() {
    let pPoints = document.createElement('p');
    let divPoints = document.querySelector('.points');
    divPoints.append(pPoints);
    pPoints.innerText = '5 points';
    sum+= 5;
})

let blueCircle = document.querySelector('.blue');
blueCircle.addEventListener('click', function() {
    let pPoints = document.createElement('p');
    let divPoints = document.querySelector('.points');
    divPoints.append(pPoints);
    pPoints.innerText = '8 points';
    sum+= 8;
})

let redCircle = document.querySelector('.red');
redCircle.addEventListener('click', function() {
    let pPoints = document.createElement('p');
    let divPoints = document.querySelector('.points');
    divPoints.append(pPoints);
    pPoints.innerText = '10 points';
    sum+= 10;
})



let i = 30;
function iTimer(){
    i--;
    console.log(i);
}
let timerId = setInterval(() => iTimer(), 1000);
setTimeout(() => { clearInterval(timerId); alert('Game Over ! You have earned ' + sum + ' points'); }, 30000);