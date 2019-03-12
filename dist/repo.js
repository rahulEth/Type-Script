"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = repo.name;
        this.url = repo.html_url;
        this.description = repo.description;
        this.size = repo.html_size;
        this.forkCount = repo.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
