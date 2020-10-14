let btn = document.querySelector('.getData');
function sendRequest () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    request.onreadystatechange = function() {
        if (request.readyState !=4 ) {
            return;
        }
        if (request.status == 200) {
            console.log(request.responseText);  
         setTimeout(() => {
             flag = true;
             btn.removeAttribute("disabled");
         }, 3 * 1000);
        } 
        else {
            console.log('shit happens: ' + request.status + ', ' + request.statusText);
        }
    }
    request.send();
    request.timeout = 10*1000;
    request.ontimeout = function() {
        request.abort();
        console.log('запрос не прошел');
        sendRequest();
    }
}
try {
    btn.addEventListener('click', function(){
     btn.setAttribute("disabled", "disabled");
        sendRequest();
    });
}
catch (err){
    console.log(err);
    alert('error');
}