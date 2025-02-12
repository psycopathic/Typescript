function errorDetection(msg:string):never{
    throw new Error(msg)
}

console.log(errorDetection("error"));