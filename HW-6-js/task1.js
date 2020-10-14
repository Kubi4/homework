let throttle = true;
let btn = document.querySelector('.getData');
try {
  btn.addEventListener("click", () => {
    if (throttle === true) {
      let request = new XMLHttpRequest();
      request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
      request.onreadystatechange = function(){
          if (request.readyState !=4){
              return;
          }
          if (request.status == 200){
              alert('all ok');
              console.log(request.responseText)
          } else {
              alert('error' + request.status + ', ' + request.statusText);    
          }
      }
      request.send();
        throttle = false
        setTimeout( () => {
            throttle = true
        }, 3 * 1000)
    }
  });
}
catch (err){
  console.log(err);
  alert('error');
}


