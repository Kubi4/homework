function avg2() {
    var a = +prompt('Enter a','');
    var b = +prompt('Enter b','');
    if (isNaN(a) || isNaN(b)) {
        console.log('Error, there must be numbers');
    }   
    else {
        return ((a + b)/ 2);
    }
}
console.log(avg2());