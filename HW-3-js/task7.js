var persons = [];
var person1 = {
    name: 'Bob',
    surname: 'Gilbert',
    country: 'USA',
    fathername: 'Lewis'
}
var person2 = {
    name: 'Thomas',
    surname: 'Owen',
    country: 'Australia'
}
var person3 = {
    name: 'Will',
    surname: 'Giggs',
    country: 'UK',
    fathername: 'Jackson'
}
persons.push(person1, person2, person3, {name: 'Harry', surname: 'Kane', country: 'UK'});
console.log(persons);

var str = "<table border='1'><tr><td>Name</td><td>Surname</td></tr>"
for (let i=0;i<persons.length;i++){
    str += `<tr><td>${persons[i].name}</td><td>${persons[i].surname}</td></tr>`
}
str += "</table>"

console.log(str)
document.write(str)