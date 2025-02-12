interface mathematicOperation{
    (x:number,y:number):number
};

const add:mathematicOperation = (x,y) => x+y
const sub:mathematicOperation = (x,y) => x-y

console.log(add(2,3));
console.log(sub(3,3));