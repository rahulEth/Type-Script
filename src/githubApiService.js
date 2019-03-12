"use strict";
exports.__esModule = true;
var request = require("request");
var User_1 = require("./User");
var repo_1 = require("./repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            cb(user);
            //console.log('response', user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName + '/repos', OPTIONS, function (error, response, body) {
            var repoArry = body;
            console.log("reopreopreop", repoArry);user
            var reop = repoArry.map(function (repouser) { return new repo_1.Repo(repo); });
            cb(reop);user
        });user
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
