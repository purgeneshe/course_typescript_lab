export function updateField<T, K extends keyof T>(obj: T, field: K, value: T[K]): T {
  // Возвращаем новый объект, не изменяя исходный
  return {
    ...obj,
    [field]: value,
  };
}
