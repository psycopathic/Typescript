// interface computer{
//     name : string;
//     price : number;
//     ram : number;
// }

// let myComputer : computer = {
//     name : "Dell",
//     price : 100000,
//     ram : 16
// }

// console.log(myComputer.name);
// console.log(myComputer.price);
// console.log(myComputer.ram);

interface movies{
    readonly name : string;
    price : number;
    ram? : number;
}

const myMovie : movies = {
    name : "Dell",
    price : 100000,
    ram : 16
}
console.log(myMovie.name);
console.log(myMovie.price);
console.log(myMovie.ram);
