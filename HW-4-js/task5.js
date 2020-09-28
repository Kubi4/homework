let inputA = document.createElement('input');
document.body.append(inputA);
inputA.setAttribute('type', 'number');
let inputB = document.createElement('input');
document.body.append(inputB);
inputB.setAttribute('type', 'number');
let button = document.createElement('button');
document.body.append(button);
button.textContent = 'Button';
let div = document.createElement('div');
document.body.append(div);
div.textContent = 'result';

function a() {
    let sum = ((+inputA.value) + (+inputB.value));
    div.textContent = 'result = ' + sum;
}
button.setAttribute('onclick', 'a()');
