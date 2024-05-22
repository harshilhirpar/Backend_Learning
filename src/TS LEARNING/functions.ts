// Basic Function type

// Syntax let funcName: (param1: type, param2: type) => returnType
let myFunction: (a: number, b: number) => number

const add = (x: number, y:number): number => {
    return x + y
}

// Interface
// Interfaces are a powerful way to define the shape of objects

interface Person {
    name: string,
    age: number
}

const data:Person = {
    name: "Harshil",
    age: 20
}

// Interfaces also have some optional parameters
interface Person2 {
    firstName: string,
    age: number,
    middleName?: string
}

const data2: Person2 = {
    firstName: "Harshil",
    age: 20
}

// There is also one property and that is readonly

interface readOnlyExample {
    readonly id: string,
    name: string
}

const readOnlyDataExample: readOnlyExample = {
    id: "343423",
    name: "Sdvsvsd"
}

// readOnlyDataExample.id = "sdvnkdjfvndlfkb"   Because of readonly I cannot change the id 

interface UserDetails {
    name: string,
    age: number
}

interface UserEducation {
    schoolName: string,
    grades: number
}

interface User extends UserDetails, UserEducation {
    key: string
}

// Change
const user: User = {
    name: "SDvcsdv",
    age: 45,
    schoolName: "Csdvsdvsd",
    grades: 34,
    key: "SDvvnlkfvndflkbv"
}