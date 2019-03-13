

class Car {
    name: string;
    acceleration: number =0;
    constructor(Name :string){
        this.name = Name;
    }
    honk(){
        console.log("tooooottt");
    }
    accelerate(speed : number){
       this.acceleration = this.acceleration + speed ;
    }
}

let car = new Car("BMW");
car.honk();
car.accelerate(20);
console.log(car.acceleration);

class obj1 {
    width : number = 0;
    length : number = 0;
}
class baseObject extends obj1 {
    calSize(){
        return this.width + this.length;
    }
}

let baseobject = new baseObject();
console.log(baseobject.calSize());
baseobject.width = 4;
baseobject.length = 5;
console.log(baseobject.calSize());

class oPerson {
    _firstName : string;
    constructor(name : string){
        this._firstName = name;
    }
    
    set Name(name : string){
        if(name.length > 3){
            this._firstName = name;

        }else{
            this._firstName =''
        }
    }
    get Name(){
         return this._firstName;
    }
}

let persn = new oPerson("Rahul");
console.log("persn.Name1",persn.Name);
persn.Name = "DM";
console.log("persn.Name2",persn.Name);
persn.Name = "Saini";
console.log("persn.Name3", persn.Name)



