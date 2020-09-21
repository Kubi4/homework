function sum3() {
    var a = +prompt('Enter a','');
    var b = +prompt('Enter b','');
    var c = +prompt('Enter c','');
    if (isNaN(a)) {
        return (b + c);
    } 
    else if (isNaN(b)) {
        return (a + c);
    }
    else if (isNaN(c)) {
        return (a + b);
    }
    else if ((isNaN(a) && isNaN(b)) || (isNaN(a) && isNaN(c)) || (isNaN(b) && isNaN(c)) || (isNaN(a) && isNaN(b) && isNaN(c))) {
        return ('error');
    }
    else {
        return (a + b + c);
    }
}
console.log(sum3());