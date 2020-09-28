let persons = [{
	name: 'Vasyan', age: 21
}, {
	name: 'Kolyan', age: 22
}, {
	name: 'Mashka', age: 17
}];

function t(object, key) {
    if (key === 'name') {
        persons.sort(function(a, b){
            let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) 
              return -1
            if (nameA > nameB)
              return 1
            return 0
            })
        console.log(persons);
    } else if (key === 'age') {
        persons.sort(function(a, b) {
            return a.age - b.age
        })
        console.log(persons);
    }
}
t(persons, 'name');




