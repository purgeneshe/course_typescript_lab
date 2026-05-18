export function removeFirstOccurrence(arr, value) {
  const result = [];
  const indexToRemove = arr.indexOf(value);

  // Копируем все элементы, кроме того, чей индекс равен первому вхождению value
  for (let i = 0; i < arr.length; i++) {
    if (i !== indexToRemove) {
      result.push(arr[i]);
    }
  }

  return result;
}
