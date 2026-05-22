export abstract class Shape {
  abstract area: number;
   
  display(): void {
    console.log(`Area: ${this.area}`);
  }
}

export class Circle extends Shape {
  radius: number;
   
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Реализуем абстрактное свойство area как геттер: PI * r * r
  get area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

