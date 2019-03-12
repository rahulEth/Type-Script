"use strict";
exports.__esModule = true;
var githubApiService_1 = require("./githubApiService");
var svr = new githubApiService_1.GithubApiService();
svr.getUserInfo("rahulEth", function (user) {
    console.log('user user', user);
});


// let objPerson = new Person();
// objPerson.firstName = "Test";
// objPerson.lastName = "run";
// console.log("objPerson", objPerson);
// let arry = ['1','2','3','4','5'];
// console.log(_.reverse(arry));
