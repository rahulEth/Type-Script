"use strict";
//class with private constructor can not be instanciates , and such constructor can be accessible or declaired with in the same class
var onlyOne = /** @class */ (function () {
    //public readonly name ;
    function onlyOne(name) {
        this.name = name;
    }
    onlyOne.getInstance = function () {
        if (!onlyOne.instance) {
            onlyOne.instance = new onlyOne("the only one");
        }
        return onlyOne.instance;
    };
    return onlyOne;
}());
;
//let wrong= new onlyOne("The only one");
var right = onlyOne.getInstance();
console.log("right", right);
//right.name = "rahul";   // if we add readonly property to name then we cant able to rewrite it.
// console.log("right", right);
