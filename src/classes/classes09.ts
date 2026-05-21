export class Product {
  
  name: string;
  price: number;
  static discountRate = 0;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  describe() {
    console.log(`Продукт: ${this.name}, цена: ${this.price}`);
  } 
  static applyDiscount(products: Product[]) {
    // Применяем скидку discountRate ко всем продуктам, обновляя их price
    for (const product of products) {
      product.price = product.price * (1 - Product.discountRate);
    }
  }
}
