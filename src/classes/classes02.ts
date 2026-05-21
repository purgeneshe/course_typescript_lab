export class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    // Присваиваем name и price, заменяя отрицательную цену на 0
    this.name = name;
    this.price = price < 0 ? 0 : price;
  }
}
