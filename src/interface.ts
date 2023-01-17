export interface User{
    name: string
    age: number
    id: number
    // We can make it optional by ?
    email?: string
}

export interface Login{
    Login():User
    greet():string
}

let rohvis :User = {
    name:'rohith',
    age:23,
    id:7,
}

interface Android extends User{
    chip: string
    creator: User
}

let robo : Android = {
    creator:rohvis,
    name: 'Android 18',
    chip : 'Halflovite18',
    id:10,
    age:10,
    email:'android18@earth.com'
}
console.log(rohvis)
console.log(robo)