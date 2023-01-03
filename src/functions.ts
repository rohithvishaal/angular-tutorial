function add(a:number,b:number, ...c:number[]) : number{
    return a+b+c.reduce((e1,e2)=>e1+e2, 0)
}

const sub = (num1:number, num2:number):number => num1 - num2

let nums = [1,2,3,4]
console.log(add(1,2,...nums))

function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items)
}

let concatResult = getItems<number>([1,2,3,4,5,6])
let concatString = getItems<string>(['a', 'b', 'c', 'd'])
console.log(concatResult, concatString)