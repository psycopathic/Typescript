class home{
    public name:string;
    protected age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    getName():string{
        return `${this.name} ${this.age}`;
    }
}

let p1 = new home("John",30);

class person1 extends home{
    constructor(name:string,age:number){
        super(name,age);
    }
}

const harsh = new person1("Harsh",20);
console.log(harsh.getName());