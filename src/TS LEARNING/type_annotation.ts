let age: number = 20
let firstName: string = "Harshil"
let lastName: string = "Hirpara"
let isActive: boolean = true
let hobbies: string[] = ["csdv", "bfgb"]
let tupleExample: [string, number] = ["SCdsvsdvd", 45]

// Can use when you need some constant
enum Role {
    Admin,
    User,
    Guest
}

let userRole: Role = Role.Guest

function greet(name: string): void {
    console.log("Hello World")
}