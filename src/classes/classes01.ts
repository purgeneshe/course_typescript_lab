export class Person {
    firstName: string;
    lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        // Присваиваем значения параметров полям класса, firstName/lastName public (по умолчанию), age private
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
