class Person {
    constructor(name) {
        this.name = name;
    }
    greet(){
        console.log(`Hello${this.name}`);
    }
}
class Student extends Person{
    constructor(name,coures){
        super(name);
        this.coures= coures;
    }
    study(){
        console.log(`${}`)
    }
}
