let request = new XMLHttpRequest();
request.open('POST', 'https://jsonplaceholder.typicode.com/users', true);
request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
request.onload = function () {
    console.log(this.responseText);
};
request.send('user=person&pwd=password&organization=place&requiredkey=key');



