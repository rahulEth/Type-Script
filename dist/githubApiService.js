"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
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
            // console.log("reopreopreop",repoArry);           
            var reop = repoArry.map(function (repo) { return new repo_1.Repo(repo); });
            cb(reop);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
