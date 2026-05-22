export class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setSize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  get area(): number {
    return this.width * this.height;
  }
}

export class Square extends Rectangle {
  override setSize(width: number, height: number): void {
    // Берём наибольшую сторону
    const size = Math.max(width, height);
    super.setSize(size, size);
  }
}
