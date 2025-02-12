var persons = /** @class */ (function () {
    function persons(name, age) {
        this.name = name;
        this.age = age;
    }
    persons.prototype.getName = function () {
        return "".concat(this.name, " ").concat(this.age);
    };
    return persons;
}());
var Persons = new persons("John", 30);
console.log(Persons.getName());
