export function insertAtPosition(arr, pos, elem) {
  // Вырезаем левую часть до позиции, объединяем с элементом и затем с правой частью
  return arr.slice(0, pos).concat([elem], arr.slice(pos));
}
