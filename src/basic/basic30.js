export function extractUniqueValues(arr1, arr2) {
  const result = [];
  // Копируем элементы второго массива в результат
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  // Обходим первый массив и добавляем элементы, которых еще нет в результате
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  }

  return result;
}
