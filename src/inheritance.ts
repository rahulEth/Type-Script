class Person {
    name:string;
    private type! : string;   // private is accessable only within the class
    protected age : number =27;// protected is accessable only within the class and subclass
    constructor(name: string, public username : string){
        this.name = name;
    } 

    printAge(){
         console.log("print age", this.age);
    }

    setType(Type:string) {
        this.type = Type;
        console.log("setType", this.type);    
    }
}

const person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
person.setType("Cool guy");

class Max extends Person{
    //name = "Kuldeep"    //overwriting the name property of Person class with this name 
    constructor(username : string) {
        super("max", username);     
        this.age = 31;   //overwriting the age property
    }
}

const max = new Max("Anna");
console.log("max max....", max);
max.printAge();