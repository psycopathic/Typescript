var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var home = /** @class */ (function () {
    function home(name, age) {
        this.name = name;
        this.age = age;
    }
    home.prototype.getName = function () {
        return "".concat(this.name, " ").concat(this.age);
    };
    return home;
}());
var p1 = new home("John", 30);
var person1 = /** @class */ (function (_super) {
    __extends(person1, _super);
    function person1(name, age) {
        return _super.call(this, name, age) || this;
    }
    return person1;
}(home));
var harsh = new person1("Harsh", 20);
console.log(harsh.getName());
