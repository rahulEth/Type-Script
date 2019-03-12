"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27; // protected is accessable only within the class and subclass
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log("print age", this.age);
    };
    Person.prototype.setType = function (Type) {
        this.type = Type;
        console.log("setType", this.type);
    };
    return Person;
}());
var person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
person.setType("Cool guy");
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    //name = "Kuldeep"    //overwriting the name property of Person class with this name 
    function Max(username) {
        var _this = _super.call(this, "max", username) || this;
        _this.age = 31; //overwriting the age property
        return _this;
    }
    return Max;
}(Person));
var max = new Max("Anna");
console.log("max max....", max);
max.printAge();
