function intRandom(a, b) {
console.log(a);
console.log(b);
    if (b === undefined) {
        b = a;
        a = 0;
    }
    console.log(a);
    console.log(b);
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.round(Math.random() * (b - a + 1)) + a;
}

console.log(intRandom(5));