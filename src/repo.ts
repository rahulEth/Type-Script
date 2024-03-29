export class Repo {
    name: string;
    description: string;
    url: string;
    size: number;
    forkCount: number;
    constructor(repo : any){
        this.name =repo.name;
        this.url = repo.html_url;
        this.description = repo.description;
        this.size = repo.html_size; 
        this.forkCount = repo.forks 
    }
}