class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Student {
	person: Person;
	group: string;
	constructor(name: string, age: number, group: string) {
		// Создаём внутренний Person из name/age и сохраняем group
		this.person = new Person(name, age);
		this.group = group;
	}
}
