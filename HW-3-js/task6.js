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

var person4str = '{"name":"Phill","surname":"Johnes","country":"Ireland"}'
var person4 = JSON.parse(person4str);
persons.push(person4);
console.log(persons);