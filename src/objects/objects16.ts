export function addToCollection<T, K extends string>(
  obj: Record<K, T[]>,
  collectionName: K,
  element: T
): Record<K, T[]> {
  // Создаем копию существующего массива коллекции с новым элементом
  const updatedCollection = [...obj[collectionName], element];

  // Возвращаем новый объект, сохраняя иммутабельность
  return {
    ...obj,
    [collectionName]: updatedCollection,
  };
}
