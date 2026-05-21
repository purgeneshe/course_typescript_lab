export class Animal {
  name: string;
   
  constructor(name: string) {
    this.name = name;
  }
   
  makeSound(): void {
    console.log("Some generic sound");
  }
}

export class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  // Реализуем метод bark, который выводит "Woof!"
  bark(): void {
    console.log("Woof!");
  }
}
