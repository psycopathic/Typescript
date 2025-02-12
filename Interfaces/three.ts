interface people{
    firstName : string;
    lastName : string;
    age : number;
    sayHello() : void;
}

function greet(person:people){
    console.log("Hello " + person.firstName + " " + person.lastName + " you are " + person.age + " years old");
    person.sayHello();
}

const john:people = {
   firstName : "John",
   lastName : "Doe",
   age : 30,
   sayHello(){
       console.log("Hello");
   }
}

greet(john);