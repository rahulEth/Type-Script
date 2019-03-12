"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//objects
var userData = {
    name: "Max",
    age: 27
};
function multiply(number1, number2) {
    return number1 * number2;
}
console.log('userData', userData);
// functionType
var myMultiply;
myMultiply = multiply;
console.log('myMultiply', myMultiply(2, 4));
//complex object
var complex = {
    data: [2, 3, 4, 5],
    output: function (all) {
        console.log("alll", all);
        return this.data;
    }
};
var complex2 = {
    data: [2, 3, 434, 5],
    output: function (all) {
        console.log("all", all);
        return this.data;
    }
};
//union type 
var myRealAge;
myRealAge = 23;
myRealAge = "Rahul";
//check types
var finalValue = 23;
if (typeof finalValue == "number") { //put data type under quotation mark
    console.log("final value is number");
}
//never type
function neverReturns() {
    throw new Error("An error");
}
// Nullable Type
var anyThing; //this is implicitly define to any , if noImplicitAny change to true it will raise an error
anyThing = 12;
var canBeNull = 12;
// canBeNull = null;    // set strictNullChecks to true so that no one can assign the value to be null
console.log('canBeNull', canBeNull);
var canAlsoBeNull;
canAlsoBeNull = null;
var thisCanBeNull = null;
thisCanBeNull = 12;
console.log('thisCanBeNull', thisCanBeNull);
function controlMe(isTrue, somthingElse) {
    var result;
    if (isTrue && somthingElse) {
        result = 12;
    }
    result = 33;
    return result;
}
//Spread Operator
var numbers = [1, 2, 3, 45];
console.log(Math.max(33, 34, 10, -12));
console.log(Math.max.apply(Math, numbers)); //Spread Operator
//Rest Operator
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(2, 4, 6));
// rest parapeter and tuples
// Another Example
// below both print same outut
function printInfo(name, age) {
    console.log("My name is " + name + "my age is", age);
}
function printInfo1() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    console.log("My name is " + array[0] + " my age is", array[1]);
}
console.log(printInfo("rahul", 24), printInfo1("rahul", 24));
// Destructuring Array ES6
var myhobbies = ['cricket', 'Meditation'];
var hobby1 = myhobbies[0], hobby2 = myhobbies[1];
console.log(hobby1, hobby2);
// Destructuring Object ES6
var myObj = {
    myName: "Rahul",
    myAge: 24
};
var name = myObj.myName, age = myObj.myAge;
console.log("myName myAge", name, age);
//template literals
var userName = "Max";
var geeting = "this is an heading!\n I'm " + userName + ".\n this is cool";
console.log("geeting", geeting);
