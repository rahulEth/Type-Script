import { type } from "os";

//objects
let userData :{name :string, age :number} = {
   name : "Max",
   age : 27
}

function multiply(number1 :number, number2 : number):number{
    return number1*number2;
}

console.log('userData', userData);


// functionType

let myMultiply: (num1 :number, num2 :number) =>number; 

myMultiply = multiply;
console.log('myMultiply',myMultiply(2,4));

//complex object
let complex : {data : number[], output : (all: boolean) => number[]}={
    data : [2,3,4,5],
    output : function(all : boolean) : number[]{
        console.log("alll", all);
        return this.data;
    }
}

type Complex = {data : number[], output : (all: boolean) => number[]}
let complex2 : Complex={
    data : [2,3,434,5],
    output : function(all : boolean){    //if define somthing never used it will not compile 
        console.log("all", all); 
        return this.data;
    } 
}

//union type 
let myRealAge: number | string;

myRealAge = 23;
myRealAge = "Rahul"


//check types

let finalValue = 23;
if (typeof finalValue == "number"){     //put data type under quotation mark
    console.log("final value is number");
}    


//never type

function neverReturns() :never {      // never type never return anything 
    throw new Error("An error");
}

// Nullable Type
let anyThing ;    //this is implicitly define to any , if noImplicitAny change to true it will raise an error
anyThing = 12;

let canBeNull = 12;
// canBeNull = null;    // set strictNullChecks to true so that no one can assign the value to be null
console.log('canBeNull',canBeNull);
let canAlsoBeNull;
canAlsoBeNull = null;

let thisCanBeNull: null | number = null;
thisCanBeNull = 12;
console.log('thisCanBeNull',thisCanBeNull);


function controlMe(isTrue :Boolean, somthingElse : Boolean){
    let result : number;

    if(isTrue && somthingElse){
       result = 12;
    }
    result =33;
    return result;
}


//Spread Operator

const numbers = [1,2,3,45];
console.log(Math.max(33,34,10,-12));   
console.log(Math.max(...numbers));   //Spread Operator

//Rest Operator
function makeArray(...args : number[]){    // ...args is an rest operator 
    return args;
}

console.log(makeArray(2,4,6));
// rest parapeter and tuples
// Another Example
// below both print same outut
function printInfo(name : string, age : number){
   console.log("My name is " + name + "my age is", age);
}

function printInfo1(...array : [string, number]){
    console.log("My name is " + array[0] + " my age is", array[1]);
}


console.log(printInfo("rahul", 24), printInfo1("rahul", 24));


// Destructuring Array ES6

const myhobbies = ['cricket', 'Meditation'];
const [hobby1, hobby2] = myhobbies;
console.log(hobby1, hobby2);

// Destructuring Object ES6
const myObj = {
    myName : "Rahul",
    myAge : 24
}

const {myName : name, myAge : age} = myObj;
console.log("myName myAge", name, age);

//template literals
const userName = "Max";
const geeting = `this is an heading!
 I'm ${userName}.
 this is cool`

console.log("geeting", geeting);





