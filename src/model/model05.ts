export class Product {
  price: number;
   
  constructor(price: number) {
    this.price = price;
  }
}

export class DiscountedProduct extends Product {
  discountPercentage: number;

  constructor(price: number, discountPercentage: number) {
    // Вызываем конструктор родителя и сохраняем скидку
    super(price);
    this.discountPercentage = discountPercentage;
  }
}
