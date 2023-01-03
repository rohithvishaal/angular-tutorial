import { Login, User} from "./interface"

class Employee{
    id!: number
    name!: string
    address!: string
}

let john = new Employee()
john.id = 1
john.name = 'john'
john.address = 'Highland 72'

console.log(john)

class NewEmployee implements Login{
    // Syntax for private variables
    // 1) #variable
    // 2) private variable:type
    #spyID:string
    // Syntax for protected variables
    // protected variable: type
    protected id:number
    name:string
    address:string

    // Getter
    get empSpyID(): string{
        return this.#spyID
    }

    // Setter
    set empSpyID(newSpyID){
        this.#spyID = newSpyID
    }

    constructor(spyID:string, id:number, name:string, address:string){
        this.#spyID = spyID
        this.id = id
        this.name = name
        this.address = address
    }

    getNameWithAddress():string{
        return `${this.name} ${this.address}`
    }

    // Static can be called on the class itself
    // Ex: NewEmployee.getEmployeeCount()
    static getEmployeeCount(): number{
        return 50
    }

    Login(): User {

        return {
            name: this.name,
            age:10,
            id: this.id
        }
    }
    greet(): string {
        return "User Logged In"
    }
}

class Manager extends NewEmployee{
    constructor(spyID:string, id:number, name:string, address:string){
        super(spyID, id, name, address)
        this.id = id
        this.name = name
        this.address = address
    }
}

let vishaal = new NewEmployee('ID007',2, 'Vishaal', 'California')
let rohith = new Manager('ID008',3, 'Rohith', 'Palo Alto')
let printString = `Vishaal Object (NewEmployee): ${JSON.stringify(vishaal)}
Rohith Object (Manager): ${JSON.stringify(rohith)}
Methods:
getNameWithAddress (NewEmployee - Parent) : ${vishaal.getNameWithAddress()}
getEmployeeCount (NewEmployee - Static Method) : ${NewEmployee.getEmployeeCount()}
getEmployeeCount (Manager- Inherited - Static Method) : ${Manager.getEmployeeCount()}
getNameWithAddress (Manager - Inherited from NewEmployee) : ${rohith.getNameWithAddress()}
getter SpyID (Manager) - ${rohith.empSpyID}
`
rohith.empSpyID = 'ID009'
printString += `Setter SpyID (Manager) - ${rohith.empSpyID}`
console.log(printString)
console.log(vishaal.Login())
console.log(vishaal.greet())
