let link = prompt('Enter image link', '');
if (link.indexOf(' ') > -1) {
    document.write('error link must not contain spaces');
}
if (link.length < 10) {
    document.write('error link length must be bigger than 10');
}
let degrees = +prompt('Enter degrees', '');
let myImg = document.querySelector('#myimg');
myImg.setAttribute('src', link);
myImg.setAttribute('style', `transform: rotate(${degrees}deg); width: 250px;`);
for (let i = 0; i < 4; i++) {
    let newImg = document.createElement('img');
    document.body.append(newImg);
    newImg.setAttribute('src', link);
    newImg.setAttribute('style', `transform: rotate(${degrees*(i + 2)}deg); width: 250px;`);
}
if (isNaN(degrees)) {
    document.write('error degrees must be a number');
}

