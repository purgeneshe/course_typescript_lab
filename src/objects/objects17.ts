export function removeField<T, K extends keyof T>(obj: T, field: K): Omit<T, K> {    
  // Деструктурируем объект, исключая указанное поле field, и возвращаем остаток
  const { [field]: _, ...rest } = obj;
  return rest;
}
