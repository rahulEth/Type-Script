abstract class Project{
    projectName : string ="default";
    budget : number = 30;
    calcBudget() {
        return this.budget * 2;
    }   

    abstract changeName(name  :string):void;
    
}

class ITProject extends Project {
    changeName(name :string):void {
        this.projectName =  name;
    }
}

let newProject = new ITProject();
console.log(newProject)
console.log(newProject.changeName("widget"))
console.log(newProject);