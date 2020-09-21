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

for (var i = 0; i < persons.length; i++){
    if ('fathername' in persons[i]) {
        persons[i].fullName = persons[i].name + ' ' + persons[i].surname + ' ' + persons[i].fathername;
    }
}