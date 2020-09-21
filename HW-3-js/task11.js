function sum(...arguments) {
    var sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(sum(5,20,15,2,2,15,34,4));