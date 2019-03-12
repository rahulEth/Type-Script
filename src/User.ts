import {Repo} from './repo';
export class User {
    login: string;
    fullName: string;
    repoCount: number;
    followerCount: number;
    repos ? : Repo[];
    constructor (response : any) {
        this.login = response.login;
        this.fullName = response.name;
        this.repoCount = response.public_repos;
        this.followerCount = response.followers;
    }
}