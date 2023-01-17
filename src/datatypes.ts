// String
let myName:string
myName = 'Vishaal'
// number 
let age : number
age = 24
// boolean
let isValid : boolean
isValid = true
// This is not initialized to anything like in other languages

// array
// Type 1
let places : string[]
// Type 2 - Generics
// let places : Array<string>
places = ["India", "Japan", "Taiwan"]

let numList : Array<number> = [1,2,3,4,5]
numList.filter(num => num>2)
let findPlace = places.find(place => place === 'India')
console.log(numList, findPlace)

// enum
const enum Color{
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue

enum AnotherColor{
    Violet,
    Purple,
    Indigo
}

let ac: AnotherColor = AnotherColor.Indigo

console.log(AnotherColor)

// Tuple
// The order matters in the init of a tuple
let numberTuple : [number, boolean, string]
numberTuple = [1,false, 'hello']
numberTuple.push('Something')

// Readonly tuple
// It is a good practice to make tuples readonly
const readOnlyTuple : readonly [number, boolean, string] = [5, true, 'Rohith Vishaal']

// The below code throws error as it is read only tuple
// readOnlyTuple.push('new value')