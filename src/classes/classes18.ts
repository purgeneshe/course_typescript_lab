export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

type Figure = {
  moveTo: (point: Point) => void;
  getMaxX: () => number;
};

export class Circle implements Figure {
  private center: Point;
  private radius: number;

  constructor(x: number, y: number, radius: number) {
    this.center = new Point(x, y);
    this.radius = radius;
  }

  moveTo(point: Point): void {
    // Перемещаем центр круга в новую точку
    this.center = point;
  }

  getMaxX(): number {
    // Максимальная X-координата - центр + радиус
    return this.center.x + this.radius;
  }
}
