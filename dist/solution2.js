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
var Car = /** @class */ (function () {
    function Car(Name) {
        this.acceleration = 0;
        this.name = Name;
    }
    Car.prototype.honk = function () {
        console.log("tooooottt");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
car.accelerate(20);
console.log(car.acceleration);
var obj1 = /** @class */ (function () {
    function obj1() {
        this.width = 0;
        this.length = 0;
    }
    return obj1;
}());
var baseObject = /** @class */ (function (_super) {
    __extends(baseObject, _super);
    function baseObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    baseObject.prototype.calSize = function () {
        return this.width + this.length;
    };
    return baseObject;
}(obj1));
var baseobject = new baseObject();
console.log(baseobject.calSize());
baseobject.width = 4;
baseobject.length = 5;
console.log(baseobject.calSize());
var oPerson = /** @class */ (function () {
    function oPerson(name) {
        this._firstName = name;
    }
    Object.defineProperty(oPerson.prototype, "Name", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstName = name;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return oPerson;
}());
var persn = new oPerson("Rahul");
console.log("persn.Name1", persn.Name);
persn.Name = "DM";
console.log("persn.Name2", persn.Name);
persn.Name = "Saini";
console.log("persn.Name3", persn.Name);
