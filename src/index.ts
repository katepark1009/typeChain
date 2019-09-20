// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age: number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const mumu = new Human("mumu",2,'dog');

const person = {
    name: 'kate',
    age: 10,
    gender: 'femalezzz'
};

const sayHi = (person: Human) => { //! optional argument => ?
    console.log(`hello, ${person.name}, you are ${person.age} years old, ${person.gender}`);
}

sayHi(person);
sayHi(mumu);

export {};