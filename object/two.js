//using object as function return value
function printUser() {
    return {
        name: 'John',
        age: 30,
        isMarried: false
    };
}
console.log(printUser());
