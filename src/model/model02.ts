export class Vehicle {
  move(): void {
    console.log("Vehicle is moving");
  }
}

export class Car extends Vehicle {
  // Переопределяем move, чтобы выводить отдельное сообщение для Car
  override move(): void {
    console.log("Car is moving");
  }
}
