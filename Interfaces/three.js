function greet(person) {
    console.log("Hello " + person.firstName + " " + person.lastName + " you are " + person.age + " years old");
    person.sayHello();
}
var john = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello: function () {
        console.log("Hello");
    }
};
greet(john);
