interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: 'kate',
    age: 10,
    gender: 'femalezzz'
};

const sayHi = (person: Human) => { //! optional argument => ?
    console.log(`hello, ${person.name}, you are ${person.age} years old, ${person.gender}`);
}

sayHi(person);

export {};