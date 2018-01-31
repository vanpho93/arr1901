const people = [
    { name: 'Teo', age: 10, height: 150 },
    { name: 'Ti', age: 20, height: 120 },
    { name: 'Tun', age: 15, height: 130 },
];

// map, filter, find, findIndex
people.forEach((person, index) => {
    // console.log(index + 1 + ':' + person.name + ': ' + person.age);
    console.log(`${index + 1}: ${person.name}: ${person.age}`);
});
