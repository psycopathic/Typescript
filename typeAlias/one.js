function printPerson(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.gender);
}
var person = {
    name: 'John',
    age: 30,
    gender: 'male'
};
var res = printPerson(person);
console.log(res);
