//using object as function return value

function printUser():{name:string, age:number, isMarried:boolean}{
    return {
        name: 'John',
        age: 30,
        isMarried: false
    }
}

console.log(printUser())