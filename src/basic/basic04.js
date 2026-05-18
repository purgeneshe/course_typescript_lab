export function calculate_discount(price, discount) {
  // Если скидка превышает 100%, возвращаем сообщение об ошибке
  if (discount > 100) {
    return "Ошибка! Процент скидки слишком большой.";
  }
  // Вычисляем итоговую стоимость с учетом скидки
  return price - (price * discount) / 100;
}


