export class Person {
  name: string;
   
  constructor(name: string) {
    this.name = name;
  }
}

export class Employee extends Person {
  position: string;

  constructor(name: string, position: string) {
    // Вызываем конструктор родителя и добавляем position
    super(name);
    this.position = position;
  }
}