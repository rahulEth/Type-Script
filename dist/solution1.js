"use strict";
// Exercise 1 Solution
var double = function (value) { return value * 2; };
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello" + name);
};
greet();
greet("Anna");
var Numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, Numbers));
//spred operator Desturcturing
var newArray = [4, 5];
console.log(newArray.push.apply(newArray, Numbers));
var TestResults = [3.89, 2.99, 1.38];
var result1 = TestResults[0], result2 = TestResults[1], result3 = TestResults[2];
console.log("result1, result2, result3", result1, result2, result3);
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log("firstName, experience", firstName, experience);
