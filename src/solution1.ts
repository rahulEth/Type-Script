// Exercise 1 Solution
var double = (value :number) =>  value*2;
console.log(double(10));

var greet = (name  = "Max") =>{
    console.log("Hello" + name);
}
greet();
greet("Anna");


const Numbers = [-3, 33, 38, 5];
console.log(Math.min(...Numbers));
//spred operator Desturcturing
const newArray = [4, 5];
console.log(newArray.push(...Numbers));

const TestResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = TestResults;
console.log("result1, result2, result3", result1, result2, result3);

const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log("firstName, experience", firstName, experience);
