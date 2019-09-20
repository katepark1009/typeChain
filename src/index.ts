// const name = "kate",
//     age = 10,
//     gender = "male";

const sayHi = (name:string, age:number, gender:string) => { //! optional argument => ?
    console.log(`hello, ${name}, you are ${age} years old, ${gender}`);
}

sayHi("kate", 22, "female");

export {};