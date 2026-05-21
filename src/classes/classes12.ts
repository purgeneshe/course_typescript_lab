export class Pair<T> {
  private first: T;
  private second: T;

  constructor(first: T, second: T) {
    this.first = first;
    this.second = second;
  }

  public getFirst(): T {
    return this.first;
  }

  public getSecond(): T {
    return this.second;
  }

  public setFirst(first: T): void {
    this.first = first;
  }

  public setSecond(second: T): void {
    this.second = second;
  }

  public swap(): void {
    // Меняем местами first и second через временную переменную
    const temp = this.first;
    this.first = this.second;
    this.second = temp;
  }
}

