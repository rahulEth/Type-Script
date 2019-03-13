//class with private constructor can not be instanciates , and such constructor can be accessible or declaired with in the same class

class onlyOne {
    private static instance: onlyOne;
    //public readonly name ;
    private constructor(public readonly name: string){}
    static getInstance(){
        if(!onlyOne.instance){
            onlyOne.instance = new onlyOne("the only one"); 
        }
        return onlyOne.instance;
    }
};
 
 //let wrong= new onlyOne("The only one");
let right = onlyOne.getInstance();
console.log("right",right);
//right.name = "rahul";   // if we add readonly property to name then we cant able to rewrite it.
// console.log("right", right);