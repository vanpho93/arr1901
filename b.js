const arr = [1, 7, 2, 8, 4, 3, 6, 10];

// const arr2 = arr.pop();
// console.log(arr2);

// arr.sort((a, b) => a - b);
// console.log(arr);

console.log(arr.reduce((a, b) => a + b));

const people = [
    { name: 'Teo', age: 10, height: 150 },
    { name: 'Ti', age: 20, height: 120 },
    { name: 'Tun', age: 15, height: 130 },
];

console.log(people.map(person => person.age).reduce((a, b) => a + b));
console.log(people.reduce((a, b) => ({ age: a.age + b.age })).age);
