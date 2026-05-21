export class Collection<T extends { equals(other: T): boolean }> {
  private items: T[] = [];

  constructor(...items: T[]) {
    this.items.push(...items);
  }
  
  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter((i) => !i.equals(item));
  }

  contains(item: T): boolean {
    return this.items.some((i) => i.equals(item));
  }

  count(item: T): number {
    // Подсчитываем, сколько элементов равны заданному, используя метод equals из ограничения типа
    return this.items.filter((i) => i.equals(item)).length;
  }
}
