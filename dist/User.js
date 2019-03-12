"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(response) {
        this.login = response.login;
        this.fullName = response.name;
        this.repoCount = response.public_repos;
        this.followerCount = response.followers;
    }
    return User;
}());
exports.User = User;
