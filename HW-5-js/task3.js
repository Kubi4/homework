(function() {
    let number = 5;
    function t(){
        console.log(number--);
        if(!number)
            clearInterval(timer);
    }
    let timer = setInterval(t, 1000);
})();