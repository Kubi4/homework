function makeProfileTimer(){
    var a = performance.now();
    return function qwe(){
        var b = performance.now();
        return(b - a);
    }
}
let timer = makeProfileTimer();
console.log();
alert(timer());