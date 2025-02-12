var printPerson = function (person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.gender);
};
var res = printPerson({
    name: 'John',
    age: 30,
    gender: 'male'
});
console.log(res);
