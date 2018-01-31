const people = [
    { name: 'Teo', age: 10, height: 150 },
    { name: 'Ti', age: 20, height: 120 },
    { name: 'Tun', age: 15, height: 130 },
];

console.log(people.sort((p1, p2) => p1.age - p2.age));
console.log(people.sort((p1, p2) => p2.height - p1.height));

// map, filter, find, findIndex
people.forEach((person, index) => {
    // console.log(index + 1 + ':' + person.name + ': ' + person.age);
    console.log(`${index + 1}: ${person.name}: ${person.age}`);
});

console.log(people.every(person => person.age > 15));
console.log(people.some(person => person.age > 15));
