class persons{
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return `${this.name} ${this.age}`
    }
}

const Persons = new persons("John", 30);
console.log(Persons.getName());
