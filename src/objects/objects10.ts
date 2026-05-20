export const counter = {
  x: 0,
  count(): number {
    // Увеличиваем x на 1 и возвращаем новое значение
    this.x += 1;
    return this.x;
  },
};
