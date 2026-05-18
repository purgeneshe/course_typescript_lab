export function second_largest(arr) {
  let maxVal = null;
  let secondMaxVal = null;

  // Проходим по массиву и отслеживаем максимальное и второе максимальное значения
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];

    if (maxVal === null) {
      maxVal = x; // Инициализируем первое максимальное значение
    } else if (x > maxVal) {
      secondMaxVal = maxVal; // Предыдущий максимум становится вторым
      maxVal = x; // Задаем новый абсолютный максимум
    } else if (x < maxVal) {
      // Если число меньше максимума, оно может претендовать на второй максимум
      if (secondMaxVal === null || x > secondMaxVal) {
        secondMaxVal = x;
      }
    }
  }

  return secondMaxVal;
}
