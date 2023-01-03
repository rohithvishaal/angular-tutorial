# TypeScript
* A strongly typed Programming Language
* Created and Maintained by Microsoft
* Superset of JS

## Why TypeScript?

* Compiles to JS
* Keeps your Code Evergreen
* Supported by all major libs and frameworks

## Type Safety
* Keeps your app free from type errors
* C#, Java are examples of Type Safe Languages
* Keep your JS code free from undefined and null values
* In TS types are stripped when your code is converted to JS

## Installing and creating First TS Program
* Install Node
* Use Latest version of Node JS  

    ```sh
    npm init # to create a package.json
    ```
* Install Typescript
    ```sh
    npm i typescript
    ```
* Initialize TypeScript
    ```sh
    tsc --init # generates tsconfig.json
    ```

## Compiling TS 
### Example
```ts
// newscript.ts
let lastName = "Vishaal"
```
```sh
# Execute tsc to convert it into normal JS file
$ tsc
```
```js 
// Output - newscript.js
"use strict";
let lname = 'Vishaal';
```
## Data Types
* **string**
* **number**
* **boolean**
* **array**
* **enum**
* **tuple**
* **any**
* **void**
* **never**

## Examples for types

### string
```ts
let name : string
name = 'Vishaal'
```
### number 
```ts
let age : number
age = 24
```
### boolean
> This is not initialized to anything like in other languages
```ts
let isValid : boolean
isValid = true
```
### array
1) **Type 1**
```ts
let places : string[]
```
2) **Type 2 - Generics**
```ts
let places : Array<string>
places = ["India", "Japan", "Taiwan"]
```
### enum
```ts
const enum Color{
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue
```
* Here the value of Blue is 2
* So putting const will tell TS to convert it into final value.
* In the JS file the output is something like this
```js
let c = 2 /* Color.Blue */;
```

* If no const is present then TS writes a function
```ts
enum AnotherColor{
    Violet,
    Purple,
    Indigo
}

let ac: AnotherColor = AnotherColor.Indigo
```
* This generates the following
```js
var AnotherColor;
(function (AnotherColor) {
    AnotherColor[AnotherColor["Violet"] = 0] = "Violet";
    AnotherColor[AnotherColor["Purple"] = 1] = "Purple";
    sAnotherColor[AnotherColor["Indigo"] = 2] = "Indigo";
})(AnotherColor || (AnotherColor = {}));
let ac = AnotherColor.Indigo;
```
### Tuple
* The order matters in the init of a tuple
```ts
let numberTuple : [number, boolean, string]
numberTuple = [1,false, 'hello']
numberTuple.push('Something')

// this outputs
[ 1, false, 'hello', 'Something' ]
```
#### **Readonly tuple**
* It is a good practice to make tuples readonly
```ts
const readOnlyTuple : readonly [number, boolean, string] = [5, true, 'Rohith Vishaal']
```
* The below code throws error as it is read only tuple
```ts
readOnlyTuple.push('new value')
```
### Any
* donot use this in production as it same as in JS. there is no type safety
```ts
let department:any
```
### void
* void represents the return value of functions which don’t return a value.
```ts
function greet: void  {
    console.log("Hello World")
}
```
### never
* **never** is a type with 0 values
* All expressions cannot be evaluated to a type
* for those kind of functions or expressions we use **never**
```ts
function f(): never {
  return f()
}
// Here f() will not evaluate to anything hence we use type never
```
* More often you will see never with code that is sure to throw an error, or cause the program to terminate
```ts
function throwSomeError(): never {
  throw new Error()
}

function bye(): never {
  process.exit(0)
}
```
> [Stackoverflow Reference](https://stackoverflow.com/a/68782419/12524608)

# Functions
* **Function keyword**
```ts
function add(a:number, b:number) : number
{
    return a+b
}
```
* **Arrow Function**
```ts
const sub = (num1:number, num2:number):number => num1 - num2
```
* **Function expression**
```ts
const mult = function(num1:number, num2:number):number{
    return num1*num2
}
```

* **Optional Parameters**
```ts
function add(num1: number, num2: number, num3?: number): number{
    return num3? num1+num2+num3 : num1 + num2
}
```

* **Required Parameters**
```ts
function add(num1: number, num2: number, num3=10): number{
    return num1+num2+num3
}
```
* **Rest Parameters**
```ts
function add(num1: number, num2: number,...num3: number[]): number{
    return num1+num2+num3.reduce((a,b)=>a+b, 0)
}
```
* **Generic Functions**
```ts
function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items)
}

let concatString = getItems<string>(['a', 'b', 'c'])
let concatNums = getItems<number>([1,2,3,4])
```
# Classes
## Creating a class without a constructor

```ts
class Employee{
    id!: number
    name!: string
    address!: string
}

let john = new Employee()
john.id = 1
john.name = 'john'
john.address = 'Highland 72'

// Outputs
Employee { id: 1, name: 'john', address: 'Highland 72' }
```
## Creating class with a constructor

> In Type Script you can have either default constructor or parameterized constructor
```ts

class NewEmployee{
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
}

/*
''' 
Property 'id' is protected and only accessible within class 'NewEmployee' and its subclasses.
'''
*/
class Manager extends NewEmployee{
    constructor(spyID:string, id:number, name:string, address:string){
        // No need to define the types here
        super(spyID, id, name, address)
        this.id = id
        this.name = name
        this.address = address
    }
}
```
### Testing
```ts
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
```
```ts
// Outputs
Employee { id: 1, name: 'john', address: 'Highland 72' }
Vishaal Object (NewEmployee): {"id":2,"name":"Vishaal","address":"California"}
Rohith Object (Manager): {"id":3,"name":"Rohith","address":"Palo Alto"}       
Methods:
getNameWithAddress (NewEmployee - Parent) : Vishaal California
getEmployeeCount (NewEmployee - Static Method) : 50
getEmployeeCount (Manager- Inherited - Static Method) : 50
getNameWithAddress (Manager - Inherited from NewEmployee) : Rohith Palo Alto  
getter SpyID (Manager) - ID008
Setter SpyID (Manager) - ID009
```
# Interfaces
* We can create interfaces using the interface keyword
* Interfaces can be extended and Implemented
```ts
interface User{
    name    : string
    age     : number
    id      : number
    // We can make it optional by ?
    email?  : string
}
```
### Creating a object of type User
```ts
// Email is optional
let rohvis :User = {
    name    :   'rohith'    ,
    age     :   23          ,
    id      :   7           ,
}
```
### Extending interface **User**
```ts
interface Android extends User{
    chip    :    string
    creator :    User
}
```
### Two new properties get's added - chip, creator
```ts
let robo : Android = {
    // The User we created above
    creator :    rohvis         ,
    name    :    'Android 18'   ,
    chip    :    'Halflovite18' ,
    id      :    10             ,
    age     :    10             ,
    email   :    'android18@earth.com'
}
```
```ts
// output
console.log(rohvis)
console.log(robo)

{ name: 'rohith', age: 23, id: 7 }
{
  creator: { name: 'rohith', age: 23, id: 7 },
  name: 'Android 18',
  chip: 'Halflovite18',
  id: 10,
  age: 10,
  email: 'android18@earth.com'
}
```
### Implementing an Interface
```ts
interface Login{
    Login():User
}
```
* We will use our NewEmployee Class to implement Login.
```ts
class NewEmployee implments Login{
    /*
    after all the init stuff and other methods
    */
    Login():User{
        return {
             name: this.name, 
             age: 10, 
             id: this.id
        }
    }
}

let vishaal = new NewEmployee('ID007',2, 'Vishaal', 'California')
console.log(vishaal.Login())

// Outputs
{ name: 'Vishaal', age: 10, id: 2 }
```

# Decorators
[decorators - javaTpoint](https://www.javatpoint.com/typescript-decorators)

# tsconfig.json
> TSC Will always compiles the output and generates the JS file irrespective of errors
* "outDir" :"\<path>\"  
    * Generated all he JS files in the **path** mentioned
* "sourceMap"  : "true"  
    * Generates map files for every ts file.  
    * It contains the metadata about where the TS file comes from. 
    * The browser redirects to the TS file instead of JS file.
* "noEmit" : "true"  
    * Will not generate JS file. 