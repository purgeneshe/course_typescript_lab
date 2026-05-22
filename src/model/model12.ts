export abstract class MathOperations {
  static pi: number = 3.14159265359;

  // Статический метод для возведения числа в квадрат
  static square(n: number): number {
    return n * n;
  }

  abstract calculate(): number;
}

export class CircleArea extends MathOperations {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Вычисляем площадь круга: pi * (r^2), используя square
  calculate(): number {
    return MathOperations.pi * MathOperations.square(this.radius);
  }
}
