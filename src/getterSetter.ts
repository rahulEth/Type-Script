//getter setter work like a property not function

class Plant{
    private _species : string = "Default";

    get species(){     //they work like a proprety not a function
        return this._species;
    } 

    set species(value :string){   // they work like a property not a function
        if(value.length >3){
            this._species = value;
        }else{ 
            this._species = "Default";
        }
    } 
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Rahul";
console.log("....", plant.species);

//static property and method 

class Helpers {
    static PI: number= 3.14;
    static calCircumferance(diameter : number): number{
        return this.PI * diameter; 
    }
}

console.log(Helpers.PI);    //you can call them without creating the object
console.log(Helpers.calCircumferance(8)); // you can call them without creating the object