class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    static compare(p1, p2) {
        // console.log(this.name);
        const message = p1.age > p2.age ? `${p1.name} is bigger than ${p2.name}` :  `${p2.name} is bigger than ${p1.name}`;
        console.log(message);
    }
}

const teo = new Person('Teo Nguyen', 10, 100);
const ti = new Person('Ti Nguyen', 12, 120);
const tun = new Person('Tun Nguyen', 11, 130);

Person.compare(teo, ti);

// Person.prototype.show = function(p) { console.log(p) }

const date = new Date();

console.log(date.toLocaleTimeString('en-GB'));
console.log(Date.now());
