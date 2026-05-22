export class Shape {
  draw(): void {
    console.log("Drawing shape");
  }
}

export class Circle extends Shape {
  // Переопределяем draw: сначала вызываем super, затем выводим своё сообщение
  override draw(): void {
    super.draw();
    console.log("Drawing circle");
  }
}
