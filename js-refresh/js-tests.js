//console.log('Hello World!')

// Let and Const
/* const myConstName = 'Fil'
console.log(myConstName)

let myLetName = 'Menu'
console.log(myLetName) */

// Arrow functions
/* const myFunction = (name, age) => {
    console.log('Hello Arrow Function!')
    console.log(`My name is ${name} and my age is ${age}.`)
}

myFunction("Fil", 20) */
/* const multiply = (num) => num * num

console.log('The square of 4 is ' + multiply(4) + '.') */

// Exports & Imports (modules)
/* import person from './person'

console.log(person) */

// Classes
/* class Human {
    constructor() {
        this.gender = 'male'
    }

    printGender() {
        console.log(this.gender)
    }
}

class Person extends Human {
    constructor() {
        super()
        this.name = 'Fil'
    }

    printMyName() {
        console.log(this.name)
    }
}

const person = new Person()
person.printMyName()
person.printGender() */

/* class Multiply {
    constructor() {
        //this.number = 0
    }
    
    printMulti(value) {
        return console.log(value * value)
    }
}

const multiply = new Multiply()
multiply.printMulti(10) */

// Classes, Properties & Methods
/* class Human {
    gender = 'male'

    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    myName = 'Fil'

    printMyName = () => {
        console.log(this.myName)
    }
}

const person = new Person()
person.printGender()
person.printGender() */

// Spread && Rest Operators

// -- Spread
/* const numbers = [1, 2, 3, 4]
const newNumbers = [...numbers, 5, 6]

console.log(numbers, 5, 6)
console.log(newNumbers) */
/* const person = {
    name: 'Fil',
};

const newPerson = {
    ...person,
    age: 20,
}
console.log(newPerson) */

// -- Rest
/* const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3)) */
