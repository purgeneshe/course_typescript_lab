export abstract class Animal {
  name: string;
   
  constructor(name: string) {
    this.name = name;
  }
   
  abstract makeSound(): void;
}

export class Cat extends Animal {
  constructor(name: string) {
    // Вызываем родительский конструктор с префиксом "Cat "
    super(`Cat ${name}`);
  }
   
  makeSound(): void {
    console.log("Meow!");
  }
}
