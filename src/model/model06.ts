export interface Flyable {
  fly(): void;
}

export class Bird implements Flyable {
  // Реализуем метод fly из интерфейса Flyable
  fly(): void {
    console.log("I'm flying!");
  }
}