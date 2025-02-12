// function printNumber(item:number, defaultValue:number):[number,number]{
//     return [item,defaultValue];
// }
// function printString(item:string,defaultValue:string):[string,string]{
//     return [item,defaultValue];
// }
// function printBoolean(item:boolean,defaultValue:boolean):[boolean,boolean]{
//     return [item,defaultValue];
// }
// function printing<T>(item:T,defaultValue:T):[T,T]{
//     return [item,defaultValue];
// }
// const num = printing(1,2);
// const str = printing('1','2');
// const bool = printing(true,false);
// console.log(num)
// console.log(str)
// console.log(bool)
// function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
//     return [item, defaultValue];
// }
// interface Dog{
//     name:string;
//     breed:string;
//     color:string;
// }
// const Dog1 = uniqueDataTypesFunc<Dog>({name:'Max', breed:'Golden Retriever',color:"red"}, {name:'Max', breed:'Golden Retriever',color:"red"});
// console.log(Dog1);
// function getRandomKeyvaluePair<T>(obj: { [key: string]: T }): { key: string; value: T } {
//     const keys = Object.keys(obj); // Get all keys
//     const randomKey = keys[Math.floor(Math.random() * keys.length)]; // Pick a random key
//     const value = obj[randomKey]; // Get the corresponding value
//     return { key: randomKey, value };
// }
// const stringObj = { a: "1", b: "2", c: "3" };
// const res = getRandomKeyvaluePair(stringObj);
// console.log(res);
//filter array
// function filterArray<T>(array:T[],condition:(item:T)=>boolean):T[]{
//     return array.filter((item) => condition(item));
// }
// const numberArray = [1,2,3,4,5,6,7,8,9];
// const evenNumber = filterArray<number>(numberArray,(num)=>num % 2 === 0);
// console.log(evenNumber);
// const oddNumber = filterArray<number>(numberArray,(num)=>num % 2 !== 0);
// console.log(oddNumber);
//obj
// interface Fruit {
//     name: string;
//     color: string;
// }
// const fruitArray: Fruit[] = [
//     { name: "apple", color: "red" },
//     { name: "banana", color: "yellow" },
//     { name: "mango", color: "green" }
// ];
// function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
//     return array.filter(predicate);
// }
// const redFruit = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "red");
// console.log(redFruit);
// Output: [{ name: "apple", color: "red" }]
function reversePair(value1, value2) {
    return [value2, value1];
}
var reversedPair = reversePair('hello', 20);
console.log(reversedPair);
