//import {Person} from './person';
import * as _ from 'lodash';
import {GithubApiService} from './githubApiService'
import { User } from './User';
import { Repo } from './repo';
let svr = new GithubApiService();

svr.getUserInfo("rahulEth", (user : User) =>{
    console.log('user user', user);
});

svr.getRepos("rahulEth", (repos : Repo[]) =>{
    //console.log("repossss", repos); 
});


// let objPerson = new Person();
// objPerson.firstName = "Test";
// objPerson.lastName = "run";
// console.log("objPerson", objPerson);

// let arry = ['1','2','3','4','5'];
// console.log(_.reverse(arry));
